import { db } from 'src/lib/db'

export const invoice = async ({ id }) => {
  const invoices = await db.invoice.findMany({
    where: {
      id,
    },
    orderBy: {
      createdAt: 'asc',
    },
    first: 1,
  })
  return invoices?.[0]
}

export const setInvoice = async ({ input }) => {
  if (input.id) {
    return db.invoice.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
    })
  } else {
    return db.invoice.create({
      data: {
        ...input,
      },
    })
  }
}
