import { db } from 'src/lib/db'
import { AuthenticationError, context } from '@redwoodjs/api'

export const getCurrentUser = async (authToken: { email?: string }) => {
  const email = authToken?.email
  if (!email) {
    throw new AuthenticationError('Uh, oh')
  }

  let user = await db.user.findOne({ where: { email } })
  if (!user) {
    user = await db.user.create({ data: { email } })
  }
  return user
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError()
  }
}
