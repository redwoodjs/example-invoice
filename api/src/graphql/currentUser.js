import { gql } from '@hammerframework/api'

export const schema = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    getCurrentUser: User
  }
`

export const resolvers = {
  Query: {
    getCurrentUser: (_root, _args, { currentUser }) => {
      return currentUser
    },
  },
}
