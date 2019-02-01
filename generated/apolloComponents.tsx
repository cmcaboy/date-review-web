export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace NewReview {
  export type Variables = {
    title: string;
    description?: Maybe<string>;
    rating?: Maybe<number>;
    personId?: Maybe<string>;
    authorId?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    newReview: Maybe<NewReview>;
  };

  export type NewReview = {
    __typename?: "Review";

    id: Maybe<string>;

    title: Maybe<string>;

    description: Maybe<string>;

    rating: Maybe<number>;
  };
}

export namespace NewUser {
  export type Variables = {
    username: string;
    firstName?: Maybe<string>;
    lastName?: Maybe<string>;
    age?: Maybe<number>;
    email?: Maybe<string>;
    instagramId?: Maybe<string>;
    platform?: Maybe<string>;
    photos?: Maybe<(Maybe<string>)[]>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    newUser: Maybe<NewUser>;
  };

  export type NewUser = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;

    firstName: Maybe<string>;

    lastName: Maybe<string>;

    age: Maybe<number>;

    email: Maybe<string>;

    instagramId: Maybe<string>;

    platform: Maybe<Platform>;

    photos: Maybe<(Maybe<Photos>)[]>;
  };

  export type Platform = {
    __typename?: "Platform";

    name: Maybe<string>;
  };

  export type Photos = {
    __typename?: "Photo";

    url: Maybe<string>;
  };
}

export namespace NewComment {
  export type Variables = {
    text: string;
    authorId?: Maybe<string>;
    reviewId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    newComment: Maybe<NewComment>;
  };

  export type NewComment = {
    __typename?: "Comment";

    id: Maybe<string>;

    text: Maybe<string>;

    datetime: Maybe<number>;
  };
}

export namespace NewPlatform {
  export type Variables = {
    name: string;
    description?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    newPlatform: Maybe<NewPlatform>;
  };

  export type NewPlatform = {
    __typename?: "Platform";

    id: Maybe<string>;

    name: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace EditUser {
  export type Variables = {
    id: string;
    username?: Maybe<string>;
    firstName?: Maybe<string>;
    lastName?: Maybe<string>;
    age?: Maybe<number>;
    email?: Maybe<string>;
    instagramId?: Maybe<string>;
    platform?: Maybe<string>;
    photos?: Maybe<(Maybe<string>)[]>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    editUser: Maybe<EditUser>;
  };

  export type EditUser = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;

    firstName: Maybe<string>;

    lastName: Maybe<string>;

    age: Maybe<number>;

    email: Maybe<string>;

    instagramId: Maybe<string>;

    platform: Maybe<Platform>;

    photos: Maybe<(Maybe<Photos>)[]>;
  };

  export type Platform = {
    __typename?: "Platform";

    id: Maybe<string>;

    name: Maybe<string>;
  };

  export type Photos = {
    __typename?: "Photo";

    url: Maybe<string>;
  };
}

export namespace EditReview {
  export type Variables = {
    id: string;
    title: string;
    description?: Maybe<string>;
    rating?: Maybe<number>;
    userId?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: "Mutation";

    editReview: Maybe<EditReview>;
  };

  export type EditReview = {
    __typename?: "Review";

    id: Maybe<string>;

    title: Maybe<string>;

    description: Maybe<string>;

    rating: Maybe<number>;
  };
}

export namespace EditComment {
  export type Variables = {
    id: string;
    text: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    editComment: Maybe<EditComment>;
  };

  export type EditComment = {
    __typename?: "Comment";

    id: Maybe<string>;

    text: Maybe<string>;

    datetime: Maybe<number>;
  };
}

export namespace DeleteUser {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deleteUser: Maybe<boolean>;
  };
}

export namespace DeleteReview {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deleteReview: Maybe<boolean>;
  };
}

export namespace DeleteComment {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deleteComment: Maybe<boolean>;
  };
}

export namespace DeletePhoto {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deletePhoto: Maybe<boolean>;
  };
}

export namespace Person {
  export type Variables = {
    id?: Maybe<string>;
  };

  export type Query = {
    __typename?: "Query";

    person: Maybe<Person>;
  };

  export type Person = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;

    firstName: Maybe<string>;

    lastName: Maybe<string>;

    email: Maybe<string>;

    age: Maybe<number>;

    datetime: Maybe<number>;

    isActive: Maybe<boolean>;

    photos: Maybe<(Maybe<Photos>)[]>;

    platform: Maybe<Platform>;
  };

  export type Photos = {
    __typename?: "Photo";

    url: Maybe<string>;
  };

  export type Platform = {
    __typename?: "Platform";

    name: Maybe<string>;
  };
}

export namespace Review {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    review: Maybe<Review>;
  };

  export type Review = {
    __typename?: "Review";

    id: Maybe<string>;

    title: Maybe<string>;

    description: Maybe<string>;

    rating: Maybe<number>;

    datetime: Maybe<number>;

    author: Maybe<Author>;

    datetime: Maybe<number>;

    person: Maybe<Person>;
  };

  export type Author = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;
  };

  export type Person = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;
  };
}

export namespace Comment {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    comment: Maybe<Comment>;
  };

  export type Comment = {
    __typename?: "Comment";

    id: Maybe<string>;

    author: Maybe<Author>;

    text: Maybe<string>;

    datetime: Maybe<number>;

    review: Maybe<Review>;
  };

  export type Author = {
    __typename?: "Person";

    id: Maybe<string>;

    username: Maybe<string>;
  };

  export type Review = {
    __typename?: "Review";

    id: Maybe<string>;
  };
}

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export namespace NewReview {
  export const Document = gql`
    mutation newReview(
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
        rating
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace NewUser {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace NewComment {
  export const Document = gql`
    mutation NewComment($text: String!, $authorId: ID, $reviewId: ID!) {
      newComment(text: $text, authorId: $authorId, reviewId: $reviewId) {
        id
        text
        datetime
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace NewPlatform {
  export const Document = gql`
    mutation NewPlatform($name: String!, $description: String) {
      newPlatform(name: $name, description: $description) {
        id
        name
        description
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace EditUser {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace EditReview {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace EditComment {
  export const Document = gql`
    mutation EditComment($id: ID!, $text: String!) {
      editComment(id: $id, text: $text) {
        id
        text
        datetime
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace DeleteUser {
  export const Document = gql`
    mutation DeleteUser($id: ID!) {
      deleteUser(id: $id)
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace DeleteReview {
  export const Document = gql`
    mutation DeleteReview($id: ID!) {
      deleteReview(id: $id)
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace DeleteComment {
  export const Document = gql`
    mutation DeleteComment($id: ID!) {
      deleteComment(id: $id)
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace DeletePhoto {
  export const Document = gql`
    mutation DeletePhoto($id: ID!) {
      deletePhoto(id: $id)
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace Person {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace Review {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace Comment {
  export const Document = gql`
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
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
