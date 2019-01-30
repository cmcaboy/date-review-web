import gql from "graphql-tag";

export const newReview = gql`
  mutation NewReview(
    $title: String!
    $description: String
    $rating: Int
    $personId: ID
    $authorId: ID
  ) {
    newReview(
      title: $title
      description: $description
      rating: $rating
      personId: $personId
      authorId: $authorId
    ) {
      id
      title
      description
      datetime
      rating
    }
  }
`;
