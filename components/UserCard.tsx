import * as React from "react";
import styled from "styled-components";
import { P, Avatar, H5 } from "../components/common";
import { FindUsersFindUsers } from "generated/apolloComponents";
import { PLACEHOLDER_PHOTO } from "../variables";

interface UserCardProps {
  data: FindUsersFindUsers;
}

interface UserCardState {}

class UserCard extends React.Component<UserCardProps, UserCardState> {
  public render(): JSX.Element {
    const { username, age, platform, photos, datetime } = this.props.data;
    const photo = photos.length ? photos[0].url : PLACEHOLDER_PHOTO;
    return (
      <Div>
        <LeftDiv>
          <Avatar src={photo} />
          <H5>
            {username}
            {!!age && `, ${age}`}
          </H5>
        </LeftDiv>
        <RightDiv>
          <P />
          {!!platform && <P>{platform.name}</P>}
          {!!datetime && <P>{datetime}</P>}
        </RightDiv>
      </Div>
    );
  }
}

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightDiv = styled(LeftDiv)``;

export { UserCard };
