import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (authToken: { email?: string }) => {
  const email = authToken?.email
  if (!email) {
    throw new AuthenticationError()
  }

  let user = await db.user.findOne({ where: { email } })
  if (!user) {
    user = await db.user.create({ data: { email } })
  }
  return user
}
