/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatroomUser = /* GraphQL */ `
  query GetChatroomUser($id: ID!) {
    getChatroomUser(id: $id) {
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
export const listChatroomUsers = /* GraphQL */ `
  query ListChatroomUsers(
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatroomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        ChatroomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatroomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
