
export const getUser = /* GraphQL */ `
query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    imageUri
    name
    status
    chatRoomUser {
      items {
        id
        createdAt
        updatedAt
        userID
        chatRoom {
          id
          chatRoomUsers {
            items {
              user {
                id
                imageUri
                name
                status
              }
            }
          }
        }
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
#   getUser(id: $id) {
#     id
#     name
#     imageUri
#     status
#     chatroomUser {
#       items {
#         id
#         UserID
#         ChatroomID
#         createdAt
#         updatedAt
#         chatRoom {
#           id
#           chatroomUsers {
#             items {
#               user {
#                 id
#                 imageUri
#                 name
#                 status
#               }
#             }
#           }
#         }   
#       }
#       nextToken
#     }
#     createdAt
#     updatedAt
#   }
# }
`;