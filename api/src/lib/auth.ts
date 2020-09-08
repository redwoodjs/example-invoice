import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (decoded) => {
  const email = decoded?.email
  if (!email) {
    throw new AuthenticationError('Unauthenticated')
  }

  let user = await db.user.findOne({ where: { email } })
  if (!user) {
    user = await db.user.create({ data: { email } })
  }
  return user
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError('Unauthenticated')
  }
}
