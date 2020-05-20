import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'
import { requireAuth } from 'src/lib/auth'

export const invoice = async (_args, { context: { currentUser } }) => {
  requireAuth()

  const invoices = await db.invoice.findMany({
    where: { user: { id: currentUser?.id } },
  })
  return invoices?.[0]
}

export const setInvoice = async (
  { input: { id = -1, ...invoiceData } },
  { context: { currentUser } }
) => {
  requireAuth()

  const data = {
    ...invoiceData,
    user: {
      connect: {
        id: currentUser.id,
      },
    },
  }
  const invoice = await db.invoice.upsert({
    create: data,
    update: data,
    where: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      id_userId: { id: id, userId: currentUser.id },
    },
  })
  return invoice
}
