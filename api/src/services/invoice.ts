import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const invoice = async () => {
  requireAuth()

  const invoices = await db.invoice.findMany({
    where: { user: { id: context.currentUser?.id } },
  })
  return invoices?.[0]
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
