import * as React from "react";
import styled from "styled-components";
import { Avatar, Input } from "./common";
import { PLACEHOLDER_PHOTO } from "../variables";
import {
  NewCommentComponent,
  FindReviewsQuery,
  FindCommentsQuery
} from "../generated/apolloComponents";
import * as Yup from "yup";
import { Formik, Field, FieldProps, ErrorMessage, Form } from "formik";
import { ErrorText } from "./common/ErrorText";
import { FIND_REVIEWS, FIND_COMMENTS } from "../apollo/queries";

const signupSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Too Short!")
    .max(300, "Too Long!")
});

interface CommentInputProps {
  reviewId: string;
  refetch: () => void;
}

interface CommentInputState {
  comment: string;
}

interface MyFormikProps {
  text: string;
}

// TODO: change placeholder photo to conditional that checks if user is logged in. If so,
// TODO: Store user's information in apollo-link-state
// TODO: use that photo.
class CommentInput extends React.Component<
  CommentInputProps,
  CommentInputState
> {
  constructor(props: CommentInputProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <NewCommentComponent onCompleted={this.props.refetch}>
        {newComment => {
          return (
            <Formik
              initialValues={{
                text: ""
              }}
              validationSchema={signupSchema}
              onSubmit={async (values, { setFieldValue }) => {
                // TODO: Update cache with new comment
                // TODO: assign unique ID on client
                return newComment({
                  variables: {
                    text: values.text,
                    authorId: "25",
                    reviewId: this.props.reviewId
                  },
                  update: async (store, { data }) => {
                    // TODO: increment Show comment counter
                    // TODO: return comments in descending order from server
                    setFieldValue("text", "");
                    const response = await store.readQuery<FindCommentsQuery>({
                      query: FIND_COMMENTS,
                      variables: { reviewId: this.props.reviewId }
                    });
                    response.findComments.unshift(data.newComment);
                    await store.writeQuery<FindCommentsQuery>({
                      query: FIND_COMMENTS,
                      variables: { reviewId: this.props.reviewId },
                      data: response
                    });
                    console.log("store: ", store);
                    // The cache appears to update, but the list is not automatically re-rendering
                  }
                });
              }}
            >
              {() => (
                <Form>
                  <Field
                    name="text"
                    render={({
                      field,
                      form: { errors, touched }
                    }: FieldProps<MyFormikProps>) => {
                      const error = !!errors.text && !!touched.text;
                      return (
                        <>
                          <ThisInput
                            placeholder="Write a comment..."
                            {...field}
                            error={error}
                          />
                          <ErrorMessage
                            name={field.name}
                            component={ErrorText}
                          />
                        </>
                      );
                    }}
                  />
                </Form>
              )}
            </Formik>
          );
        }}
      </NewCommentComponent>
    );
  }
}

const ThisInput = styled(Input)`
  background-color: #f2f3f5;
  border: 1px solid #ccd0d5;
  border-radius: 16px;
  height: 30px;
  width: 98%;
  font-size: 11px;
  margin: 10px 0;
`;

export { CommentInput };
