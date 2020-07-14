import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const invoices = async () => {
  requireAuth()

  return await db.invoice.findMany({
    where: { user: { id: context.currentUser?.id } },
    orderBy: { date: 'asc' },
  })
}

export const invoice = async ({ id }) => {
  return null
  requireAuth()
  const userId = context.currentUser?.id
  return await db.invoice.findOne({
    where: { id_userId: { id, userId } },
  })
}

export const setInvoice = async ({
  input: { id = -1, invoiceNumber, date, body },
}) => {
  requireAuth()
  const userId = context.currentUser?.id
  const data = {
    date,
    invoiceNumber,
    body,
    user: {
      connect: {
        id: userId,
      },
    },
  }
  const invoice = await db.invoice.upsert({
    create: data,
    update: data,
    where: {
      id_userId: { id: id, userId },
    },
  })
  return invoice
}
