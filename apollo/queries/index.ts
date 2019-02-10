import gql from "graphql-tag";

export const FIND_PERSON = gql`
  query Person($id: ID) {
    person(id: $id) {
      id
      username
      firstName
      lastName
      email
      age
      createDate
      isActive
      photos {
        url
      }
      platform {
        name
      }
      numRatings
      averageRating
    }
  }
`;

export const FIND_USERS = gql`
  query FindUsers($username: String) {
    findUsers(username: $username) {
      id
      username
      firstName
      lastName
      email
      age
      createDate
      isActive
      photos {
        url
      }
      platform {
        name
      }
    }
  }
`;

export const FIND_REVIEW = gql`
  query Review($id: ID!) {
    review(id: $id) {
      id
      title
      description
      rating
      updateDateTime
      author {
        id
        username
        profilePic {
          url
        }
      }
      person {
        id
        username
      }
    }
  }
`;

export const FIND_REVIEWS = gql`
  query FindReviews($userId: ID!) {
    findReviews(userId: $userId) {
      id
      title
      description
      rating
      updateDateTime
      author {
        id
        username
        profilePic {
          url
        }
      }
      person {
        id
        username
      }
    }
  }
`;

export const FIND_COMMENT = gql`
  query Comment($id: ID!) {
    comment(id: $id) {
      id
      author {
        id
        username
        profilePic {
          url
        }
      }
      text
      updateDateTime
      review {
        id
      }
    }
  }
`;

export const FIND_COMMENTS = gql`
  query FindComments($reviewId: ID!) {
    findComments(reviewId: $reviewId) {
      id
      author {
        id
        username
        profilePic {
          url
        }
      }
      text
      updateDateTime
      review {
        id
      }
    }
  }
`;
