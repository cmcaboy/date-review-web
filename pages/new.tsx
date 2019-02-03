// * This is the about page

import * as React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import { Content, Container, P, Input, Button, H1 } from "../components/common";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import { FaUpload, FaStar } from "react-icons/fa";
import Router from "next/router";
import Select from "react-select";
import { PRIMARY_COLOR } from "../variables";

import FormSegment from "../components/common/FormSegment";
import { NewUserAndReviewComponent } from "../generated/apolloComponents";

// TODO: control image size
// TODO: Compress images?
// TODO: Modularize image upload
// TODO: Allow multiple images to be uploaded at once
// TODO: put Cloudinary variables in environment variables
// TODO: convert form to formik

// * Guest is ID 20

const CLOUDINARY_UPLOAD_PRESET = "image-upload";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/mcaboy-digital/image/upload";

const platforms = [
  { value: "5", label: "Bumble" },
  { value: "6", label: "Tinder" }
];

interface NewProps {}

interface NewState {
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
  loading: boolean;
  uploadedFileCloudinaryUrl: string;
  uploadedFile: any;
  error: string;
  platform: {
    value: string | undefined;
    label: string | undefined;
  };
}

class New extends React.Component<NewProps, NewState> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      instagramId: "",
      email: "",
      age: undefined,
      rating: undefined,
      description: "",
      title: "",
      loading: false,
      uploadedFileCloudinaryUrl: "",
      uploadedFile: "",
      photo: "",
      error: "",
      platform: { value: undefined, label: undefined }
    };
  }
  changeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ username: e.target.value });
  changePlatform = (platform: any) => this.setState({ platform });
  changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ firstName: e.target.value });
  changeLastName = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ lastName: e.target.value });
  changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ email: e.target.value });
  changeInstagramId = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ instagramId: e.target.value });
  changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Prevent non numbers from being inputted.
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      return this.setState({
        age: e.target.value === "" ? null : parseInt(e.target.value)
      });
    }
  };
  changeRating = (rating: number) => this.setState({ rating });
  changeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ description: e.target.value });
  changeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ title: e.target.value });

  changePhoto = (e: any) => this.setState({ photo: e.target.value });

  onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call new review mutation
  };

  onImageDrop = (files: any) => {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  };

  handleImageUpload = (file: any) => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err: any, response: any) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  };

  isDisabled = () => {
    // * returns true if button should be disabled; false otherwise
    const { username, rating } = this.state;
    if (!username || !rating) {
      return true;
    }
    return false;
  };

  render(): JSX.Element {
    const {
      username,
      platform,
      firstName,
      lastName,
      instagramId,
      age,
      email,
      rating,
      title,
      description,
      uploadedFileCloudinaryUrl,
      uploadedFile
    } = this.state;
    const disabled = !username || !rating;
    return (
      <Container>
        <ThisContent>
          <Heading>Leave a new review</Heading>
          <NewUserAndReviewComponent>
            {newUserAndReview => (
              <Form
                onSubmit={async e => {
                  e.preventDefault();
                  await newUserAndReview({
                    variables: {
                      age,
                      authorId: "20",
                      description,
                      email,
                      firstName,
                      instagramId,
                      lastName,
                      platform: platform.value,
                      rating,
                      title,
                      username
                    },
                    update: (_, result) => {
                      console.log("result: ", result);
                    }
                  });
                  Router.push("/");
                }}
              >
                <FormSegment title="Username">
                  <Input value={username} onChange={this.changeUsername} />
                </FormSegment>
                <FormSegment title="Platform" optional>
                  <Select
                    value={platform}
                    onChange={this.changePlatform}
                    options={platforms}
                  />
                </FormSegment>
                <FormSegment title="First name" optional>
                  <Input value={firstName} onChange={this.changeFirstName} />
                </FormSegment>
                <FormSegment title="Last name" optional>
                  <Input value={lastName} onChange={this.changeLastName} />
                </FormSegment>
                <FormSegment title="Age" optional>
                  <Input type="text" value={age} onChange={this.changeAge} />
                </FormSegment>
                <FormSegment title="Email" optional>
                  <Input
                    type="text"
                    value={email}
                    onChange={this.changeEmail}
                  />
                </FormSegment>
                <FormSegment title="Instagram ID" optional>
                  <Input
                    value={instagramId}
                    onChange={this.changeInstagramId}
                  />
                </FormSegment>
                <FormSegment title="Upload Images" optional>
                  <Dropzone
                    onDrop={this.onImageDrop}
                    accept="image/*"
                    multiple={false}
                  >
                    {({ getRootProps, getInputProps }) => {
                      return (
                        <DropArea {...getRootProps()}>
                          <Input {...getInputProps()} />
                          {
                            <>
                              <P>
                                Drag and drop his or photos here or click to
                                select photos to upload.
                              </P>
                              <FaUpload size={40} color="#000" />
                            </>
                          }
                        </DropArea>
                      );
                    }}
                  </Dropzone>
                  {!!uploadedFileCloudinaryUrl && (
                    <>
                      <P>{uploadedFile.name}</P>
                      <Img src={uploadedFileCloudinaryUrl} />
                    </>
                  )}
                </FormSegment>
                <FormSegment title="Review Title">
                  <Input value={title} onChange={this.changeTitle} multiple />
                </FormSegment>
                <FormSegment title="Review Description" optional>
                  <Input
                    value={description}
                    onChange={this.changeDescription}
                    multiple
                  />
                </FormSegment>
                <FormSegment
                  title="Review Rating"
                  valueIndicator={`${rating || "-"} / 10`}
                >
                  <StarContainer>
                    <StarRatingComponent
                      name="Rating"
                      starCount={10}
                      value={rating}
                      onStarClick={this.changeRating}
                      starColor={PRIMARY_COLOR}
                      emptyStarColor="#DCDCDC"
                      renderStarIcon={() => <FaStar />}
                    />
                  </StarContainer>
                </FormSegment>

                <ThisButton primary disabled={disabled}>
                  Create New Review
                </ThisButton>
              </Form>
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

const Form = styled.form`
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  background-color: #fdf5e6;
  border: 1px solid gray;
  width: fit-content;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

const DropArea = styled.div`
  height: 200px;
  width: 410px;
  text-align: center;
  border: 1px solid black;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: dashed;
  border-radius: 2px;
  cursor: pointer;
`;

export default New;
