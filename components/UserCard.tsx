import * as React from "react";
import styled from "styled-components";
import { P, Img } from "../components/common";
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
          <Img src={photo} />
        </LeftDiv>
        <RightDiv>
          <P>
            {username}
            {!!age && `, ${age}`}
          </P>
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
  border-radius: 2px;
  border-width: 1;
  border-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightDiv = styled(LeftDiv)``;

export { UserCard };
