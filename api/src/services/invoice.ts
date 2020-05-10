import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'

export const invoice = async (_args, { context }) => {
  const email = context?.currentUser?.email as string

  if (!email) {
    throw new AuthenticationError()
  }

  const invoices = await db.invoice.findMany({
    where: {
      user: {
        email: email,
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
    first: 1,
  })

  return invoices?.[0]
}

export const setInvoice = async ({ input }, { context }) => {
  const email = context?.currentUser?.email as string
  if (!email) {
    throw new AuthenticationError()
  }
  // TODO: For some reason I can't use findOne with the email even though the email field is @unique.
  const users = await db.user.findMany({ where: { email } })
  let user = users?.[0]
  if (!user) {
    // create the user
    user = await db.user.create({ data: { email } })
  }

  if (input.id) {
    return db.invoice.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
        user: {
          connect: { id: user.id },
        },
      },
    })
  } else {
    return db.invoice.create({
      data: {
        ...input,
        user: {
          connect: { id: user.id },
        },
      },
    })
  }
}
