import * as React from "react";
import { FindReviewsComponent } from "../generated/apolloComponents";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import { H3 } from "./common";

interface ReviewListProps {
  id: string;
}

interface ReviewListState {}

class ReviewList extends React.Component<ReviewListProps, ReviewListState> {
  constructor(props: ReviewListProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Div>
        <H3>Reviews</H3>
        <FindReviewsComponent variables={{ userId: this.props.id }}>
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

export { ReviewList };
