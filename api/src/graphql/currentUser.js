import { queryField, objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
  },
})

export const getCurrentUser = queryField('getCurrentUser', {
  type: User,
  resolve: (_root, _args, { currentUser }) => currentUser(),
})
