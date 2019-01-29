// * This is the about page

import * as React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import { Content, Container, P, Input, Button } from "../components/common";
import styled from "styled-components";
import { FaUpload } from "react-icons/fa";

// TODO: control image size
// TODO: Compress images?
// TODO: Modularize image upload
// TODO: Allow multiple images to be uplaoded at once
// TODO: Format form

const CLOUDINARY_UPLOAD_PRESET = "image-upload";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/mcaboy-digital/image/upload";

interface NewProps {}

interface NewState {
  username: string;
  firstName: string;
  lastName: string;
  age: number | null;
  photo: string;
  rating: number | null;
  description: string;
  loading: boolean;
  uploadedFileCloudinaryUrl: string;
  uploadedFile: any;
  error: string;
}

class New extends React.Component<NewProps, NewState> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      age: null,
      rating: null,
      description: "",
      loading: false,
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null,
      photo: "",
      error: ""
    };
  }
  changeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ username: e.target.value });
  changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ firstName: e.target.value });
  changeLastName = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ lastName: e.target.value });
  changeAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ age: parseInt(e.target.value) });
  changeRating = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ rating: parseInt(e.target.value) });
  changeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ description: e.target.value });

  changePhoto = e => this.setState({ photo: e.target.value });

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
      firstName,
      lastName,
      age,
      rating,
      description,
      uploadedFileCloudinaryUrl,
      uploadedFile
    } = this.state;
    return (
      <Container>
        <Content>
          <Form onSubmit={this.onSubmit}>
            <P>Username</P>
            <Input
              placeholder="Username"
              value={username}
              onChange={this.changeUsername}
            />
            <P>First name</P>
            <Input
              placeholder="First name"
              value={firstName}
              onChange={this.changeFirstName}
            />
            <P>Last name</P>
            <Input
              placeholder="Last name"
              value={lastName}
              onChange={this.changeLastName}
            />
            <P>Age</P>
            <Input placeholder="Age" value={age} onChange={this.changeAge} />
            <P>Rating</P>
            <Input
              placeholder="Rating"
              value={rating}
              onChange={this.changeRating}
            />
            <P>Description</P>
            <Input
              placeholder="Description"
              value={description}
              onChange={this.changeDescription}
            />
            <P>Upload Images</P>
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
                          Drag and drop his or photos here or click to select
                          photos to upload.
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
            <Button primary disabled>
              Create New Review
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const Form = styled.form`
  padding: 20px;
  margin: 20px;
  border-radius: 1px;
  background-color: #fdf5e6;
  border: 1px solid black;
  width: auto;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

const DropArea = styled.div`
  height: 200px;
  width: 100%;
  border: 1px solid black;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: dashed;
  cursor: pointer;
`;

export default New;
