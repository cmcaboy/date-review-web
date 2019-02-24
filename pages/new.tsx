// * This is the about page

import * as React from "react";
import { Content, Container, Input, Button, H1 } from "../components/common";
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
import Router from "next/router";
import Select from "react-select";
import { PRIMARY_COLOR } from "../variables";

import FormSegment from "../components/common/FormSegment";
import { NewUserAndReviewComponent } from "../generated/apolloComponents";
import { ErrorText } from "../components/common/ErrorText";
import { ImageUpload } from "../components/ImageUpload";

// * Guest is ID 20

// TODO: This could be modularized to be reused for new review
// * I could have an additional prop that includes/excludes the new
// * user data
// TODO: Should I modularize the review part?
// * I could also do an inline option in the user profile page
// * This may be a better approach.

const platforms = [
  { value: undefined, label: "Unknown" },
  { value: "5", label: "Bumble" },
  { value: "6", label: "Tinder" }
];

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .notRequired(),
  username: Yup.string()
    .min(3, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  rating: Yup.number()
    .min(1)
    .max(10)
    .required("Required"),
  age: Yup.number().notRequired(),
  title: Yup.string()
    .min(4, "Too Short!")
    .max(100, "Too Long!")
    .required(),
  description: Yup.string()
    .max(500, "Too Long!")
    .notRequired(),
  firstName: Yup.string()
    .max(50, "Too Long!")
    .notRequired(),
  lastName: Yup.string()
    .max(50, "Too Long!")
    .notRequired(),
  instagramId: Yup.string()
    .max(50, "Too Long!")
    .notRequired(),
  photo: Yup.string(),
  platform: Yup.string().notRequired()
});

interface MyFormikProps {
  username: string;
  firstName: string;
  lastName: string;
  instagramId: string;
  age: number | undefined;
  email: string;
  photo: string;
  rating: number | undefined;
  description: string;
  title: string;
  platform: {
    value: string | undefined;
    label: string | undefined;
  };
}

interface NewProps {
  CLOUDINARY_UPLOAD_URL: string;
  CLOUDINARY_UPLOAD_PRESET: string;
}

interface NewState {
  loading: boolean;
  error: string;
}

class New extends React.Component<NewProps, NewState> {
  static async getInitialProps() {
    const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
    const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL;
    return {
      CLOUDINARY_UPLOAD_PRESET,
      CLOUDINARY_UPLOAD_URL
    };
  }
  constructor(props: NewProps) {
    super(props);
    this.state = {
      loading: false,
      error: ""
    };
  }

  render(): JSX.Element {
    const { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } = this.props;
    return (
      <Container>
        <ThisContent>
          <Heading>Leave a new review</Heading>
          <NewUserAndReviewComponent>
            {newUserAndReview => (
              <Formik
                initialValues={{
                  username: "",
                  platform: { value: undefined, label: undefined },
                  firstName: "",
                  lastName: "",
                  instagramId: "",
                  age: undefined,
                  email: "",
                  rating: undefined,
                  title: "",
                  description: "",
                  photo: ""
                }}
                validationSchema={signupSchema} // validation rules
                onSubmit={async values => {
                  await newUserAndReview({
                    variables: {
                      ...values,
                      authorId: "20",
                      age: values.age ? parseInt(values.age) : null,
                      platform: values.platform.value
                    },
                    update: (_, result) => {
                      console.log("result: ", result);
                    }
                  });
                  Router.push("/");
                }}
              >
                {({ touched, errors }: FormikProps<MyFormikProps>) => {
                  return (
                    <StyledForm>
                      <Form>
                        <Field
                          name="username"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error =
                              !!errors.username && !!touched.username;
                            return (
                              <FormSegment title="Username">
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="platform"
                          render={({
                            field: { value, name },
                            form: { setFieldValue }
                          }: FieldProps<MyFormikProps>) => {
                            // // const error =
                            // //   !!errors.username && !!touched.username;
                            return (
                              <FormSegment title="Platform" optional>
                                <Select
                                  value={value}
                                  onChange={newSelection =>
                                    setFieldValue(name, newSelection)
                                  }
                                  options={platforms}
                                />
                                <ErrorMessage
                                  name={name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="firstName"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error =
                              !!errors.firstName && !!touched.firstName;
                            return (
                              <FormSegment title="First name" optional>
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="lastName"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error =
                              !!errors.lastName && !!touched.lastName;
                            return (
                              <FormSegment title="Last name" optional>
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="age"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error = !!errors.age && !!touched.age;
                            return (
                              <FormSegment title="Age" optional>
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="email"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error = !!errors.email && !!touched.email;
                            return (
                              <FormSegment title="Email">
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="instagramId"
                          render={({
                            field,
                            form: { errors, touched }
                          }: FieldProps<MyFormikProps>) => {
                            const error =
                              !!errors.instagramId && !!touched.instagramId;
                            return (
                              <FormSegment title="Instagram ID" optional>
                                <Input {...field} error={error} />
                                <ErrorMessage
                                  name={field.name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
                        <Field
                          name="photo"
                          render={({
                            field: { name, value },
                            form: { setFieldValue }
                          }: FieldProps<MyFormikProps>) => {
                            // const error = !!errors.photo && !!touched.photo;
                            return (
                              <FormSegment title="Upload Images" optional>
                                <ImageUpload
                                  value={value}
                                  setFieldValue={setFieldValue}
                                  cloudinaryUrl={CLOUDINARY_UPLOAD_URL}
                                  cloudinaryPreset={CLOUDINARY_UPLOAD_PRESET}
                                />
                                <ErrorMessage
                                  name={name}
                                  component={ErrorText}
                                />
                              </FormSegment>
                            );
                          }}
                        />
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
                                <ErrorMessage
                                  name={name}
                                  component={ErrorText}
                                />
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
          </NewUserAndReviewComponent>
        </ThisContent>
      </Container>
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

const ThisContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledForm = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  background-color: #fdf5e6;
  border: 1px solid gray;
  width: fit-content;
`;

export default New;
