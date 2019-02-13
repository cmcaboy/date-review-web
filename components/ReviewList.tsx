import * as React from "react";
import { FindReviewsComponent } from "../generated/apolloComponents";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import { H3, HR } from "./common";
import { IoIosAddCircle } from "react-icons/io";
import { PRIMARY_COLOR } from "../variables";

// TODO: Support a new review
// TODO: Add onClick event to addCircle
// TODO: add black border to addCircle
// TODO: Create new review function and logic
interface ReviewListProps {
  id: string;
}

interface ReviewListState {
  newReview: boolean;
}

class ReviewList extends React.Component<ReviewListProps, ReviewListState> {
  constructor(props: ReviewListProps) {
    super(props);

    this.state = {
      newReview: false
    };
  }
  public render(): JSX.Element {
    return (
      <Div>
        <Title>
          <H3>Reviews</H3>
          <IoIosAddCircle size={36} color={PRIMARY_COLOR} />
        </Title>

        <HR />
        <FindReviewsComponent variables={{ userId: this.props.id }}>
          {({ data, loading, error }) => {
            // console.log("error: ", error);
            // console.log("loading: ", loading);
            // console.log("data: ", data);
            if (loading) {
              return null;
            } else if (error) {
              console.log("error: ", error);
              return null;
            }
            return data.findReviews.map(review => (
              <ReviewItem key={review.id} review={review} />
            ));
          }}
        </FindReviewsComponent>
      </Div>
    );
  }
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { ReviewList };
