import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (jwt) => {
  console.log('x', jwt)
  const email = jwt?.email
  if (!email) {
    //throw new AuthenticationError()
    return undefined
  }

  let user = await db.user.findOne({ where: { email } })
  if (!user) {
    user = await db.user.create({ data: { email } })
  }
  return user
}
