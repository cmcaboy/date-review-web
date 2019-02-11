// * This is the about page

import * as React from "react";
import { Content, Container, P, H3, Img, HR } from "../components/common";
import {
  // PersonQuery,
  // PersonVariables,
  PersonComponent
} from "../generated/apolloComponents";
import { MyContext } from "../interfaces/MyContext";
import StarRatingComponent from "react-star-rating-component";
import { PLACEHOLDER_PHOTO, PRIMARY_COLOR } from "../variables";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { ReviewList } from "../components/ReviewList";
// import { FIND_PERSON } from "../apollo/queries";

// ? Should I fetch the user's information in getInitialProps or in render?

interface UserProps {
  // person: any;
  id: any;
}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  static async getInitialProps({ query: { id }, apolloClient }: MyContext) {
    console.log("apolloClient: ", apolloClient);
    return { id };
    // const { data, errors, loading } = await apolloClient.query<
    //   PersonQuery,
    //   PersonVariables
    // >({
    //   query: FIND_PERSON,
    //   variables: { id }
    // });
    // if (loading) return { person: null };
    // if (errors) return { person: null };
    // return data;
  }
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    // const { person } = this.props;
    console.log("props: ", this.props);
    // if (!person) return null;
    return (
      <Container>
        <Content>
          <PersonComponent variables={{ id: this.props.id }}>
            {({ data, loading, error }) => {
              console.log("error: ", error);
              console.log("loading: ", loading);
              console.log("data: ", data);
              if (loading) {
                return null;
              } else if (error) {
                console.log("error: ", error);
                return null;
              }
              const { person } = data;
              const photo =
                !!person.photos && person.photos.length
                  ? person.photos[0].url
                  : PLACEHOLDER_PHOTO;
              return (
                <Div>
                  <LeftColumn>
                    <ThisImg src={photo} />
                  </LeftColumn>
                  <RightColumn>
                    <div>
                      <H3>
                        {person.username}
                        {!!person.age && `, ${person.age}`}
                      </H3>
                      <P>{person.platform.name}</P>
                    </div>
                    <Rating>
                      <StarRatingComponent
                        editing={false}
                        name="Rating"
                        starCount={10}
                        value={person.averageRating}
                        starColor={PRIMARY_COLOR}
                        emptyStarColor="#DCDCDC"
                        renderStarIcon={() => <FaStar size={20} />}
                      />
                      <RatingP>
                        {person.averageRating}/10 ({person.numRatings})
                      </RatingP>
                    </Rating>
                  </RightColumn>
                  <ReviewContainer>
                    <ReviewList id={this.props.id} />
                  </ReviewContainer>
                </Div>
              );
            }}
          </PersonComponent>
        </Content>
      </Container>
    );
  }
}

const Div = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 300px 500px;
  grid-template-rows: auto;
  grid-template-areas:
    "profilePic information"
    "blank reviews";
`;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ThisImg = styled(Img)`
  height: 250px;
  width: 250px;
`;

const RatingP = styled(P)`
  margin-left: 10px;
`;

const LeftColumn = styled.div`
  grid-area: profilePic;
`;
const RightColumn = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ReviewContainer = styled.div`
  grid-area: reviews;
`;

export default User;
