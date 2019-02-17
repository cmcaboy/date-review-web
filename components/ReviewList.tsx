import * as React from "react";
import { FindReviewsComponent } from "../generated/apolloComponents";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import { H3, HR, Modal } from "./common";
import { FaPlusCircle } from "react-icons/fa";
import NewReview from "./NewReview";

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

  toggleModal = () =>
    this.setState(prevState => ({ newReview: !prevState.newReview }));

  render(): JSX.Element {
    const { newReview } = this.state;
    console.log("newReview: ", newReview);
    return (
      <>
        <Modal
          showModal={newReview}
          label="New Review"
          toggleModal={this.toggleModal}
        >
          <NewReview id={this.props.id} onFinish={this.toggleModal} />
        </Modal>
        <Div>
          <Title>
            <H3>Reviews</H3>
            <AddIcon onClick={this.toggleModal}>
              <FaPlusCircle size={36} color="#000" />
            </AddIcon>
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
      </>
    );
  }
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { ReviewList };
