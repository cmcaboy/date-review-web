// * This is the about page

import * as React from "react";
import { Input, Button, H1 } from "./common";
import styled from "styled-components";
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FormikProps,
  FieldProps
} from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import * as Yup from "yup";
import { PRIMARY_COLOR } from "../variables";

import FormSegment from "./common/FormSegment";
import {
  NewReviewComponent,
  FindReviewsQuery
} from "../generated/apolloComponents";
import { ErrorText } from "./common/ErrorText";
import { FIND_REVIEWS } from "../apollo/queries";

// * Guest is ID 20

const signupSchema = Yup.object().shape({
  rating: Yup.number()
    .min(1)
    .max(10)
    .required("Required"),
  title: Yup.string()
    .min(4, "Too Short!")
    .max(100, "Too Long!")
    .required(),
  description: Yup.string()
    .max(500, "Too Long!")
    .notRequired()
});

interface MyFormikProps {
  rating: number | undefined;
  description: string;
  title: string;
}

interface NewReviewState {
  loading: boolean;
  error: string;
}

interface NewReviewProps {
  id: string;
  onFinish: () => void;
}

class NewReview extends React.Component<NewReviewProps, NewReviewState> {
  constructor(props: NewReviewProps) {
    super(props);
    this.state = {
      loading: false,
      error: ""
    };
  }

  render(): JSX.Element {
    const { id, onFinish } = this.props;
    return (
      <Div>
        <Heading>New Review</Heading>
        <NewReviewComponent>
          {newReview => (
            <Formik
              initialValues={{
                rating: undefined,
                title: "",
                description: ""
              }}
              validationSchema={signupSchema}
              onSubmit={async values => {
                await newReview({
                  variables: {
                    ...values,
                    authorId: "25",
                    personId: id
                  },
                  update: async (store, { data }) => {
                    const response = await store.readQuery<FindReviewsQuery>({
                      query: FIND_REVIEWS,
                      variables: { userId: id }
                    });
                    response.findReviews.unshift(data.newReview);
                    await store.writeQuery<FindReviewsQuery>({
                      query: FIND_REVIEWS,
                      variables: { userId: id },
                      data: response
                    });
                  }
                });
                onFinish();
              }}
            >
              {({ touched, errors }: FormikProps<MyFormikProps>) => {
                return (
                  <StyledForm>
                    <Form>
                      <Field
                        name="title"
                        render={({
                          field,
                          form: { errors, touched }
                        }: FieldProps<MyFormikProps>) => {
                          const error = !!errors.title && !!touched.title;
                          return (
                            <FormSegment title="Review Title">
                              <Input multiple {...field} error={error} />
                              <ErrorMessage
                                name={field.name}
                                component={ErrorText}
                              />
                            </FormSegment>
                          );
                        }}
                      />
                      <Field
                        name="description"
                        render={({
                          field,
                          form: { errors, touched }
                        }: FieldProps<MyFormikProps>) => {
                          const error =
                            !!errors.description && !!touched.description;
                          return (
                            <FormSegment title="Review Description" optional>
                              <Input {...field} error={error} multiple />
                              <ErrorMessage
                                name={field.name}
                                component={ErrorText}
                              />
                            </FormSegment>
                          );
                        }}
                      />
                      <Field
                        name="rating"
                        render={({
                          field: { name, value },
                          form: { setFieldValue }
                        }: FieldProps<MyFormikProps>) => {
                          // const error = !!errors.rating && !!touched.rating;
                          return (
                            <FormSegment
                              title="Review Rating"
                              valueIndicator={`${value || "-"} / 10`}
                            >
                              <StarContainer>
                                <StarRatingComponent
                                  name="Rating"
                                  starCount={10}
                                  value={value}
                                  onStarClick={newValue =>
                                    setFieldValue(name, newValue)
                                  }
                                  starColor={PRIMARY_COLOR}
                                  emptyStarColor="#DCDCDC"
                                  renderStarIcon={() => <FaStar />}
                                />
                              </StarContainer>
                              <ErrorMessage name={name} component={ErrorText} />
                            </FormSegment>
                          );
                        }}
                      />
                      <ThisButton
                        primary
                        disabled={
                          !(
                            Object.keys(touched).length &&
                            !Object.keys(errors).length
                          )
                        }
                      >
                        Create New Review
                      </ThisButton>
                    </Form>
                  </StyledForm>
                );
              }}
            </Formik>
          )}
        </NewReviewComponent>
      </Div>
    );
  }
}

const StarContainer = styled.div`
  font-size: 40px;
`;

const Heading = styled(H1)`
  margin: 10px 0 0 0;
`;

const ThisButton = styled(Button)`
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;

const StyledForm = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  background-color: #fdf5e6;
  border: 1px solid gray;
  width: fit-content;
`;

export default NewReview;
