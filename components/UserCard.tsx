import * as React from "react";
import styled from "styled-components";
import { P, Avatar, H5 } from "./common";
import { FindUsersFindUsers } from "generated/apolloComponents";
import { PLACEHOLDER_PHOTO } from "../variables";

interface UserCardProps {
  data: FindUsersFindUsers;
}

interface UserCardState {}

class UserCard extends React.Component<UserCardProps, UserCardState> {
  render(): JSX.Element {
    const { username, age, platform, photos, id } = this.props.data;
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
          {/* {!!createDate && <P>{formatDate(createDate)}</P>} */}
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  &:hover {
    cursor: pointer;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightDiv = styled(LeftDiv)``;

export { UserCard };
