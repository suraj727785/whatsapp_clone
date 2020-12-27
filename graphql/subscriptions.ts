/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatroomUser = /* GraphQL */ `
  subscription OnCreateChatroomUser {
    onCreateChatroomUser {
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
export const onUpdateChatroomUser = /* GraphQL */ `
  subscription OnUpdateChatroomUser {
    onUpdateChatroomUser {
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
export const onDeleteChatroomUser = /* GraphQL */ `
  subscription OnDeleteChatroomUser {
    onDeleteChatroomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
