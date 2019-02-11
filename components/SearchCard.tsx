import * as React from "react";
import styled from "styled-components";
import { P, Avatar, H5 } from "./common";
import { FindUsersFindUsers } from "generated/apolloComponents";
import { PLACEHOLDER_PHOTO } from "../variables";
import Link from "next/link";

interface SearchCardProps {
  data: FindUsersFindUsers;
}

interface SearchCardState {}

class SearchCard extends React.Component<SearchCardProps, SearchCardState> {
  public render(): JSX.Element {
    const { username, age, platform, photos, id } = this.props.data;
    const photo = photos.length ? photos[0].url : PLACEHOLDER_PHOTO;
    return (
      <Link href={`/user?id=${id}`} as={`/user/${id}`}>
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
      </Link>
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

export { SearchCard };
