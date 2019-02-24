export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Date = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type NewReviewVariables = {
  title: string;
  description?: Maybe<string>;
  rating: number;
  personId?: Maybe<string>;
  authorId?: Maybe<string>;
};

export type NewReviewMutation = {
  __typename?: "Mutation";

  newReview: Maybe<NewReviewNewReview>;
};

export type NewReviewNewReview = {
  __typename?: "Review";

  id: Maybe<string>;

  title: Maybe<string>;

  description: Maybe<string>;

  rating: Maybe<number>;

  updateDateTime: Maybe<Date>;

  author: Maybe<NewReviewAuthor>;

  person: Maybe<NewReviewPerson>;
};

export type NewReviewAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<NewReviewProfilePic>;
};

export type NewReviewProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type NewReviewPerson = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;
};

export type NewUserVariables = {
  username: string;
  firstName?: Maybe<string>;
  lastName?: Maybe<string>;
  age?: Maybe<number>;
  email?: Maybe<string>;
  instagramId?: Maybe<string>;
  platform?: Maybe<string>;
  photos?: Maybe<string[]>;
};

export type NewUserMutation = {
  __typename?: "Mutation";

  newUser: Maybe<NewUserNewUser>;
};

export type NewUserNewUser = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  firstName: Maybe<string>;

  lastName: Maybe<string>;

  age: Maybe<number>;

  email: Maybe<string>;

  instagramId: Maybe<string>;

  platform: Maybe<NewUserPlatform>;

  photos: Maybe<NewUserPhotos[]>;
};

export type NewUserPlatform = {
  __typename?: "Platform";

  name: Maybe<string>;
};

export type NewUserPhotos = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type NewUserAndReviewVariables = {
  username: string;
  firstName?: Maybe<string>;
  lastName?: Maybe<string>;
  age?: Maybe<number>;
  email?: Maybe<string>;
  instagramId?: Maybe<string>;
  platform?: Maybe<string>;
  photos?: Maybe<string[]>;
  title: string;
  description?: Maybe<string>;
  rating: number;
  authorId?: Maybe<string>;
};

export type NewUserAndReviewMutation = {
  __typename?: "Mutation";

  newUserAndReview: Maybe<NewUserAndReviewNewUserAndReview>;
};

export type NewUserAndReviewNewUserAndReview = {
  __typename?: "Review";

  id: Maybe<string>;

  title: Maybe<string>;

  description: Maybe<string>;

  rating: Maybe<number>;

  updateDateTime: Maybe<Date>;

  author: Maybe<NewUserAndReviewAuthor>;

  person: Maybe<NewUserAndReviewPerson>;
};

export type NewUserAndReviewAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;
};

export type NewUserAndReviewPerson = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;
};

export type NewCommentVariables = {
  text: string;
  authorId?: Maybe<string>;
  reviewId: string;
};

export type NewCommentMutation = {
  __typename?: "Mutation";

  newComment: Maybe<NewCommentNewComment>;
};

export type NewCommentNewComment = {
  __typename?: "Comment";

  id: Maybe<string>;

  author: Maybe<NewCommentAuthor>;

  text: Maybe<string>;

  updateDateTime: Maybe<Date>;

  review: Maybe<NewCommentReview>;
};

export type NewCommentAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<NewCommentProfilePic>;
};

export type NewCommentProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type NewCommentReview = {
  __typename?: "Review";

  id: Maybe<string>;
};

export type NewPlatformVariables = {
  name: string;
  description?: Maybe<string>;
};

export type NewPlatformMutation = {
  __typename?: "Mutation";

  newPlatform: Maybe<NewPlatformNewPlatform>;
};

export type NewPlatformNewPlatform = {
  __typename?: "Platform";

  id: Maybe<string>;

  name: Maybe<string>;

  description: Maybe<string>;
};

export type EditUserVariables = {
  id: string;
  username?: Maybe<string>;
  firstName?: Maybe<string>;
  lastName?: Maybe<string>;
  age?: Maybe<number>;
  email?: Maybe<string>;
  instagramId?: Maybe<string>;
  platform?: Maybe<string>;
  photos?: Maybe<string[]>;
};

export type EditUserMutation = {
  __typename?: "Mutation";

  editUser: Maybe<EditUserEditUser>;
};

export type EditUserEditUser = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  firstName: Maybe<string>;

  lastName: Maybe<string>;

  age: Maybe<number>;

  email: Maybe<string>;

  instagramId: Maybe<string>;

  platform: Maybe<EditUserPlatform>;

  photos: Maybe<EditUserPhotos[]>;
};

export type EditUserPlatform = {
  __typename?: "Platform";

  id: Maybe<string>;

  name: Maybe<string>;
};

export type EditUserPhotos = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type EditReviewVariables = {
  id: string;
  title: string;
  description?: Maybe<string>;
  rating?: Maybe<number>;
  userId?: Maybe<string>;
};

export type EditReviewMutation = {
  __typename?: "Mutation";

  editReview: Maybe<EditReviewEditReview>;
};

export type EditReviewEditReview = {
  __typename?: "Review";

  id: Maybe<string>;

  title: Maybe<string>;

  description: Maybe<string>;

  rating: Maybe<number>;
};

export type EditCommentVariables = {
  id: string;
  text: string;
};

export type EditCommentMutation = {
  __typename?: "Mutation";

  editComment: Maybe<EditCommentEditComment>;
};

export type EditCommentEditComment = {
  __typename?: "Comment";

  id: Maybe<string>;

  text: Maybe<string>;

  updateDateTime: Maybe<Date>;
};

export type DeleteUserVariables = {
  id: string;
};

export type DeleteUserMutation = {
  __typename?: "Mutation";

  deleteUser: Maybe<boolean>;
};

export type DeleteReviewVariables = {
  id: string;
};

export type DeleteReviewMutation = {
  __typename?: "Mutation";

  deleteReview: Maybe<boolean>;
};

export type DeleteCommentVariables = {
  id: string;
};

export type DeleteCommentMutation = {
  __typename?: "Mutation";

  deleteComment: Maybe<boolean>;
};

export type DeletePhotoVariables = {
  id: string;
};

export type DeletePhotoMutation = {
  __typename?: "Mutation";

  deletePhoto: Maybe<boolean>;
};

export type PersonVariables = {
  id?: Maybe<string>;
};

export type PersonQuery = {
  __typename?: "Query";

  person: Maybe<PersonPerson>;
};

export type PersonPerson = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  firstName: Maybe<string>;

  lastName: Maybe<string>;

  email: Maybe<string>;

  age: Maybe<number>;

  createDate: Maybe<Date>;

  isActive: Maybe<boolean>;

  photos: Maybe<PersonPhotos[]>;

  platform: Maybe<PersonPlatform>;

  numRatings: Maybe<number>;

  averageRating: Maybe<number>;
};

export type PersonPhotos = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type PersonPlatform = {
  __typename?: "Platform";

  name: Maybe<string>;
};

export type FindUsersVariables = {
  username?: Maybe<string>;
};

export type FindUsersQuery = {
  __typename?: "Query";

  findUsers: Maybe<FindUsersFindUsers[]>;
};

export type FindUsersFindUsers = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  firstName: Maybe<string>;

  lastName: Maybe<string>;

  email: Maybe<string>;

  age: Maybe<number>;

  createDate: Maybe<Date>;

  isActive: Maybe<boolean>;

  photos: Maybe<FindUsersPhotos[]>;

  platform: Maybe<FindUsersPlatform>;
};

export type FindUsersPhotos = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type FindUsersPlatform = {
  __typename?: "Platform";

  name: Maybe<string>;
};

export type ReviewVariables = {
  id: string;
};

export type ReviewQuery = {
  __typename?: "Query";

  review: Maybe<ReviewReview>;
};

export type ReviewReview = {
  __typename?: "Review";

  id: Maybe<string>;

  title: Maybe<string>;

  description: Maybe<string>;

  rating: Maybe<number>;

  updateDateTime: Maybe<Date>;

  author: Maybe<ReviewAuthor>;

  person: Maybe<ReviewPerson>;
};

export type ReviewAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<ReviewProfilePic>;
};

export type ReviewProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type ReviewPerson = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;
};

export type FindReviewsVariables = {
  userId: string;
};

export type FindReviewsQuery = {
  __typename?: "Query";

  findReviews: Maybe<FindReviewsFindReviews[]>;
};

export type FindReviewsFindReviews = {
  __typename?: "Review";

  id: Maybe<string>;

  title: Maybe<string>;

  description: Maybe<string>;

  rating: Maybe<number>;

  updateDateTime: Maybe<Date>;

  author: Maybe<FindReviewsAuthor>;

  person: Maybe<FindReviewsPerson>;
};

export type FindReviewsAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<FindReviewsProfilePic>;
};

export type FindReviewsProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type FindReviewsPerson = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;
};

export type CommentVariables = {
  id: string;
};

export type CommentQuery = {
  __typename?: "Query";

  comment: Maybe<CommentComment>;
};

export type CommentComment = {
  __typename?: "Comment";

  id: Maybe<string>;

  author: Maybe<CommentAuthor>;

  text: Maybe<string>;

  updateDateTime: Maybe<Date>;

  review: Maybe<CommentReview>;
};

export type CommentAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<CommentProfilePic>;
};

export type CommentProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type CommentReview = {
  __typename?: "Review";

  id: Maybe<string>;
};

export type FindCommentsVariables = {
  reviewId: string;
};

export type FindCommentsQuery = {
  __typename?: "Query";

  findComments: Maybe<FindCommentsFindComments[]>;
};

export type FindCommentsFindComments = {
  __typename?: "Comment";

  id: Maybe<string>;

  author: Maybe<FindCommentsAuthor>;

  text: Maybe<string>;

  updateDateTime: Maybe<Date>;

  review: Maybe<FindCommentsReview>;
};

export type FindCommentsAuthor = {
  __typename?: "Person";

  id: Maybe<string>;

  username: Maybe<string>;

  profilePic: Maybe<FindCommentsProfilePic>;
};

export type FindCommentsProfilePic = {
  __typename?: "Photo";

  url: Maybe<string>;
};

export type FindCommentsReview = {
  __typename?: "Review";

  id: Maybe<string>;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const NewReviewDocument = gql`
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
export class NewReviewComponent extends React.Component<
  Partial<ReactApollo.MutationProps<NewReviewMutation, NewReviewVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<NewReviewMutation, NewReviewVariables>
        mutation={NewReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewReviewProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<NewReviewMutation, NewReviewVariables>
> &
  TChildProps;
export type NewReviewMutationFn = ReactApollo.MutationFn<
  NewReviewMutation,
  NewReviewVariables
>;
export function NewReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewReviewMutation,
        NewReviewVariables,
        NewReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewReviewMutation,
    NewReviewVariables,
    NewReviewProps<TChildProps>
  >(NewReviewDocument, operationOptions);
}
export const NewUserDocument = gql`
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
export class NewUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<NewUserMutation, NewUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<NewUserMutation, NewUserVariables>
        mutation={NewUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<NewUserMutation, NewUserVariables>
> &
  TChildProps;
export type NewUserMutationFn = ReactApollo.MutationFn<
  NewUserMutation,
  NewUserVariables
>;
export function NewUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewUserMutation,
        NewUserVariables,
        NewUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewUserMutation,
    NewUserVariables,
    NewUserProps<TChildProps>
  >(NewUserDocument, operationOptions);
}
export const NewUserAndReviewDocument = gql`
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
export class NewUserAndReviewComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      NewUserAndReviewMutation,
      NewUserAndReviewVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<NewUserAndReviewMutation, NewUserAndReviewVariables>
        mutation={NewUserAndReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewUserAndReviewProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<NewUserAndReviewMutation, NewUserAndReviewVariables>
> &
  TChildProps;
export type NewUserAndReviewMutationFn = ReactApollo.MutationFn<
  NewUserAndReviewMutation,
  NewUserAndReviewVariables
>;
export function NewUserAndReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewUserAndReviewMutation,
        NewUserAndReviewVariables,
        NewUserAndReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewUserAndReviewMutation,
    NewUserAndReviewVariables,
    NewUserAndReviewProps<TChildProps>
  >(NewUserAndReviewDocument, operationOptions);
}
export const NewCommentDocument = gql`
  mutation NewComment($text: String!, $authorId: ID, $reviewId: ID!) {
    newComment(text: $text, authorId: $authorId, reviewId: $reviewId) {
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
export class NewCommentComponent extends React.Component<
  Partial<ReactApollo.MutationProps<NewCommentMutation, NewCommentVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<NewCommentMutation, NewCommentVariables>
        mutation={NewCommentDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewCommentProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<NewCommentMutation, NewCommentVariables>
> &
  TChildProps;
export type NewCommentMutationFn = ReactApollo.MutationFn<
  NewCommentMutation,
  NewCommentVariables
>;
export function NewCommentHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewCommentMutation,
        NewCommentVariables,
        NewCommentProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewCommentMutation,
    NewCommentVariables,
    NewCommentProps<TChildProps>
  >(NewCommentDocument, operationOptions);
}
export const NewPlatformDocument = gql`
  mutation NewPlatform($name: String!, $description: String) {
    newPlatform(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
export class NewPlatformComponent extends React.Component<
  Partial<ReactApollo.MutationProps<NewPlatformMutation, NewPlatformVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<NewPlatformMutation, NewPlatformVariables>
        mutation={NewPlatformDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewPlatformProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<NewPlatformMutation, NewPlatformVariables>
> &
  TChildProps;
export type NewPlatformMutationFn = ReactApollo.MutationFn<
  NewPlatformMutation,
  NewPlatformVariables
>;
export function NewPlatformHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewPlatformMutation,
        NewPlatformVariables,
        NewPlatformProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewPlatformMutation,
    NewPlatformVariables,
    NewPlatformProps<TChildProps>
  >(NewPlatformDocument, operationOptions);
}
export const EditUserDocument = gql`
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
export class EditUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditUserMutation, EditUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<EditUserMutation, EditUserVariables>
        mutation={EditUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EditUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditUserMutation, EditUserVariables>
> &
  TChildProps;
export type EditUserMutationFn = ReactApollo.MutationFn<
  EditUserMutation,
  EditUserVariables
>;
export function EditUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditUserMutation,
        EditUserVariables,
        EditUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditUserMutation,
    EditUserVariables,
    EditUserProps<TChildProps>
  >(EditUserDocument, operationOptions);
}
export const EditReviewDocument = gql`
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
export class EditReviewComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditReviewMutation, EditReviewVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<EditReviewMutation, EditReviewVariables>
        mutation={EditReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EditReviewProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditReviewMutation, EditReviewVariables>
> &
  TChildProps;
export type EditReviewMutationFn = ReactApollo.MutationFn<
  EditReviewMutation,
  EditReviewVariables
>;
export function EditReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditReviewMutation,
        EditReviewVariables,
        EditReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditReviewMutation,
    EditReviewVariables,
    EditReviewProps<TChildProps>
  >(EditReviewDocument, operationOptions);
}
export const EditCommentDocument = gql`
  mutation EditComment($id: ID!, $text: String!) {
    editComment(id: $id, text: $text) {
      id
      text
      updateDateTime
    }
  }
`;
export class EditCommentComponent extends React.Component<
  Partial<ReactApollo.MutationProps<EditCommentMutation, EditCommentVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<EditCommentMutation, EditCommentVariables>
        mutation={EditCommentDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EditCommentProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditCommentMutation, EditCommentVariables>
> &
  TChildProps;
export type EditCommentMutationFn = ReactApollo.MutationFn<
  EditCommentMutation,
  EditCommentVariables
>;
export function EditCommentHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditCommentMutation,
        EditCommentVariables,
        EditCommentProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditCommentMutation,
    EditCommentVariables,
    EditCommentProps<TChildProps>
  >(EditCommentDocument, operationOptions);
}
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export class DeleteUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteUserMutation, DeleteUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteUserMutation, DeleteUserVariables>
        mutation={DeleteUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteUserMutation, DeleteUserVariables>
> &
  TChildProps;
export type DeleteUserMutationFn = ReactApollo.MutationFn<
  DeleteUserMutation,
  DeleteUserVariables
>;
export function DeleteUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteUserMutation,
        DeleteUserVariables,
        DeleteUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeleteUserMutation,
    DeleteUserVariables,
    DeleteUserProps<TChildProps>
  >(DeleteUserDocument, operationOptions);
}
export const DeleteReviewDocument = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
export class DeleteReviewComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<DeleteReviewMutation, DeleteReviewVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteReviewMutation, DeleteReviewVariables>
        mutation={DeleteReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteReviewProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteReviewMutation, DeleteReviewVariables>
> &
  TChildProps;
export type DeleteReviewMutationFn = ReactApollo.MutationFn<
  DeleteReviewMutation,
  DeleteReviewVariables
>;
export function DeleteReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteReviewMutation,
        DeleteReviewVariables,
        DeleteReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeleteReviewMutation,
    DeleteReviewVariables,
    DeleteReviewProps<TChildProps>
  >(DeleteReviewDocument, operationOptions);
}
export const DeleteCommentDocument = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`;
export class DeleteCommentComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<DeleteCommentMutation, DeleteCommentVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteCommentMutation, DeleteCommentVariables>
        mutation={DeleteCommentDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteCommentProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteCommentMutation, DeleteCommentVariables>
> &
  TChildProps;
export type DeleteCommentMutationFn = ReactApollo.MutationFn<
  DeleteCommentMutation,
  DeleteCommentVariables
>;
export function DeleteCommentHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteCommentMutation,
        DeleteCommentVariables,
        DeleteCommentProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeleteCommentMutation,
    DeleteCommentVariables,
    DeleteCommentProps<TChildProps>
  >(DeleteCommentDocument, operationOptions);
}
export const DeletePhotoDocument = gql`
  mutation DeletePhoto($id: ID!) {
    deletePhoto(id: $id)
  }
`;
export class DeletePhotoComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeletePhotoMutation, DeletePhotoVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeletePhotoMutation, DeletePhotoVariables>
        mutation={DeletePhotoDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeletePhotoProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeletePhotoMutation, DeletePhotoVariables>
> &
  TChildProps;
export type DeletePhotoMutationFn = ReactApollo.MutationFn<
  DeletePhotoMutation,
  DeletePhotoVariables
>;
export function DeletePhotoHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeletePhotoMutation,
        DeletePhotoVariables,
        DeletePhotoProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeletePhotoMutation,
    DeletePhotoVariables,
    DeletePhotoProps<TChildProps>
  >(DeletePhotoDocument, operationOptions);
}
export const PersonDocument = gql`
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
export class PersonComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PersonQuery, PersonVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<PersonQuery, PersonVariables>
        query={PersonDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type PersonProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PersonQuery, PersonVariables>
> &
  TChildProps;
export function PersonHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PersonQuery,
        PersonVariables,
        PersonProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PersonQuery,
    PersonVariables,
    PersonProps<TChildProps>
  >(PersonDocument, operationOptions);
}
export const FindUsersDocument = gql`
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
export class FindUsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<FindUsersQuery, FindUsersVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<FindUsersQuery, FindUsersVariables>
        query={FindUsersDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type FindUsersProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<FindUsersQuery, FindUsersVariables>
> &
  TChildProps;
export function FindUsersHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        FindUsersQuery,
        FindUsersVariables,
        FindUsersProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    FindUsersQuery,
    FindUsersVariables,
    FindUsersProps<TChildProps>
  >(FindUsersDocument, operationOptions);
}
export const ReviewDocument = gql`
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
export class ReviewComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ReviewQuery, ReviewVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ReviewQuery, ReviewVariables>
        query={ReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ReviewProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ReviewQuery, ReviewVariables>
> &
  TChildProps;
export function ReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ReviewQuery,
        ReviewVariables,
        ReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ReviewQuery,
    ReviewVariables,
    ReviewProps<TChildProps>
  >(ReviewDocument, operationOptions);
}
export const FindReviewsDocument = gql`
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
export class FindReviewsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<FindReviewsQuery, FindReviewsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<FindReviewsQuery, FindReviewsVariables>
        query={FindReviewsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type FindReviewsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<FindReviewsQuery, FindReviewsVariables>
> &
  TChildProps;
export function FindReviewsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        FindReviewsQuery,
        FindReviewsVariables,
        FindReviewsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    FindReviewsQuery,
    FindReviewsVariables,
    FindReviewsProps<TChildProps>
  >(FindReviewsDocument, operationOptions);
}
export const CommentDocument = gql`
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
export class CommentComponent extends React.Component<
  Partial<ReactApollo.QueryProps<CommentQuery, CommentVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<CommentQuery, CommentVariables>
        query={CommentDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CommentProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<CommentQuery, CommentVariables>
> &
  TChildProps;
export function CommentHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CommentQuery,
        CommentVariables,
        CommentProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CommentQuery,
    CommentVariables,
    CommentProps<TChildProps>
  >(CommentDocument, operationOptions);
}
export const FindCommentsDocument = gql`
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
export class FindCommentsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<FindCommentsQuery, FindCommentsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<FindCommentsQuery, FindCommentsVariables>
        query={FindCommentsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type FindCommentsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<FindCommentsQuery, FindCommentsVariables>
> &
  TChildProps;
export function FindCommentsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        FindCommentsQuery,
        FindCommentsVariables,
        FindCommentsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    FindCommentsQuery,
    FindCommentsVariables,
    FindCommentsProps<TChildProps>
  >(FindCommentsDocument, operationOptions);
}
