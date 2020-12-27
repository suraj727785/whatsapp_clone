/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatroomUser {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatroomUser {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatroomUser {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatroomUser = /* GraphQL */ `
  mutation CreateChatroomUser(
    $input: CreateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    createChatroomUser(input: $input, condition: $condition) {
      id
      UserID
      ChatroomID
      user {
        id
        name
        imageUri
        status
        chatroomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatroomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatroomUser = /* GraphQL */ `
  mutation UpdateChatroomUser(
    $input: UpdateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    updateChatroomUser(input: $input, condition: $condition) {
      id
      UserID
      ChatroomID
      user {
        id
        name
        imageUri
        status
        chatroomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatroomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatroomUser = /* GraphQL */ `
  mutation DeleteChatroomUser(
    $input: DeleteChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    deleteChatroomUser(input: $input, condition: $condition) {
      id
      UserID
      ChatroomID
      user {
        id
        name
        imageUri
        status
        chatroomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatroomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatroomUsers {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatroomUsers {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatroomUsers {
        items {
          id
          UserID
          ChatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
