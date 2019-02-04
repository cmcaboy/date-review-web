import * as React from "react";
import Dropzone from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import request from "superagent";
import { Input, P } from "./common";
import styled from "styled-components";

// TODO: control image size
// TODO: Compress images?
// TODO: Allow multiple images to be uploaded at once

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL;

interface ImageUploadProps {
  value: string | undefined;
  setFieldValue: (field: string, value: string) => void;
}

interface ImageUploadState {
  uploadedFile: any;
}

class ImageUpload extends React.Component<ImageUploadProps, ImageUploadState> {
  constructor(props: ImageUploadProps) {
    super(props);

    this.state = {
      uploadedFile: ""
    };
  }

  // Only update if value is changed
  shouldComponentUpdate(nextProps: ImageUploadProps) {
    if (nextProps.value !== this.props.value) {
      return true;
    }
    return false;
  }

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
        this.props.setFieldValue("photo", response.body.secure_url);
      }
    });
  };
  public render(): JSX.Element {
    const { value } = this.props;
    return (
      <>
        <Dropzone onDrop={this.onImageDrop} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => {
            return (
              <DropArea {...getRootProps()}>
                <Input {...getInputProps()} />
                {
                  <>
                    <P>
                      Drag and drop his or photos here or click to select photos
                      to upload.
                    </P>
                    <FaUpload size={40} color="#000" />
                  </>
                }
              </DropArea>
            );
          }}
        </Dropzone>
        {!!value && <Img src={value} />}
      </>
    );
  }
}

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

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

export { ImageUpload };
