import gql from "graphql-tag";

export const NEW_REVIEW = gql`
  mutation newReview(
    $title: String!
    $description: String
    $rating: Int!
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
      rating
    }
  }
`;

export const NEW_USER = gql`
  mutation NewUser(
    $username: String!
    $firstName: String
    $lastName: String
    $age: Int
    $email: String
    $instagramId: String
    $platform: ID
    $photos: [String]
  ) {
    newUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      age: $age
      email: $email
      instagramId: $instagramId
      platform: $platform
      photos: $photos
    ) {
      id
      username
      firstName
      lastName
      age
      email
      instagramId
      platform {
        name
      }
      photos {
        url
      }
    }
  }
`;

export const NEW_USER_AND_REVIEW = gql`
  mutation NewUserAndReview(
    $username: String!
    $firstName: String
    $lastName: String
    $age: Int
    $email: String
    $instagramId: String
    $platform: ID
    $photos: [String]
    $title: String!
    $description: String
    $rating: Int!
    $authorId: ID
  ) {
    newUserAndReview(
      username: $username
      firstName: $firstName
      lastName: $lastName
      age: $age
      email: $email
      instagramId: $instagramId
      platform: $platform
      photos: $photos
      title: $title
      description: $description
      rating: $rating
      authorId: $authorId
    ) {
      id
      title
      description
      rating
      updateDateTime
      author {
        id
        username
      }
      person {
        id
        username
      }
    }
  }
`;

export const NEW_COMMENT = gql`
  mutation NewComment($text: String!, $authorId: ID, $reviewId: ID!) {
    newComment(text: $text, authorId: $authorId, reviewId: $reviewId) {
      id
      text
      updateDateTime
    }
  }
`;

export const NEW_PLATFORM = gql`
  mutation NewPlatform($name: String!, $description: String) {
    newPlatform(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const EDIT_USER = gql`
  mutation EditUser(
    $id: ID!
    $username: String
    $firstName: String
    $lastName: String
    $age: Int
    $email: String
    $instagramId: String
    $platform: ID
    $photos: [String]
  ) {
    editUser(
      id: $id
      username: $username
      firstName: $firstName
      lastName: $lastName
      age: $age
      email: $email
      instagramId: $instagramId
      platform: $platform
      photos: $photos
    ) {
      id
      username
      firstName
      lastName
      age
      email
      instagramId
      platform {
        id
        name
      }
      photos {
        url
      }
    }
  }
`;

export const EDIT_REVIEW = gql`
  mutation EditReview(
    $id: ID!
    $title: String!
    $description: String
    $rating: Int
    $userId: ID
  ) {
    editReview(
      id: $id
      title: $title
      description: $description
      rating: $rating
      userId: $userId
    ) {
      id
      title
      description
      rating
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation EditComment($id: ID!, $text: String!) {
    editComment(id: $id, text: $text) {
      id
      text
      updateDateTime
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`;

export const DELETE_PHOTO = gql`
  mutation DeletePhoto($id: ID!) {
    deletePhoto(id: $id)
  }
`;
