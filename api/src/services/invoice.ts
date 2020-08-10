import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const invoices = async () => {
  requireAuth()
  return await db.invoice.findMany({
    where: { user: { id: context.currentUser?.id } },
    orderBy: {
      date: 'asc',
    },
  })
}

export const invoice = async ({ id }) => {
  requireAuth()

  if (id === 'new') {
    return null
  }

  const userId = context.currentUser?.id
  return await db.invoice.findOne({
    where: { id_userId: { id, userId } },
  })
}

export const setInvoice = async ({
  input: { id, invoiceNumber, date, body },
}) => {
  requireAuth()
  const userId = context.currentUser?.id
  const data = {
    id,
    date,
    invoiceNumber,
    body,
    user: {
      connect: {
        id: userId,
      },
    },
  }

  if (typeof id === 'undefined') {
    return db.invoice.create({ data })
  } else {
    return db.invoice.update({
      where: { id_userId: { id, userId } },
      data,
    })
  }
}
