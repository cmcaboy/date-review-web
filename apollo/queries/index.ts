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
      datetime
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
      datetime
      author {
        id
        username
      }
      datetime
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
      }
      text
      datetime
      review {
        id
      }
    }
  }
`;
