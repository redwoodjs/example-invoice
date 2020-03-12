/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

const DEFAULT_INVOICE = {
  title: 'I N V O I C E',
  companyName: 'Example Inc.',
  companyInfo: 'example.com\ninfo@example.com',
  recipient:
    'Michael Scott Paper Company Inc.\n1725 Slough Avenue\nScranton, Pennsylvania',
  information: [
    [{ value: 'Invoice #' }, { value: '044' }],
    [
      { value: 'Date' },
      { value: new Intl.DateTimeFormat().format(new Date()) },
    ],
  ],
  lineItems: [
    [{ value: 'Description' }, { value: 'Quantity' }, { value: 'Price' }],
    [{ value: 'Wheel of cheese' }, { value: 1 }, { value: 500 }],
    [{ value: 'Jar of sausages' }, { value: 2 }, { value: 2.99 }],
    [{ value: 'Tin of waffles' }, { value: 2 }, { value: 3.01 }],
  ],
  summary: [
    [{ value: 'Subtotal' }, undefined, '0.0'],
    [{ value: 'Tax Rate' }, { value: 0 }, '0.0'],
    [{ value: 'Total' }, { value: '$' }, '0.0'],
  ],
  notesA: '',
  notesB: 'Invoice by billable.me',
}

async function main() {
  const invoiceOne = await db.invoice.findOne({ where: { id: 1 } });
  if (!invoiceOne) {
    const invoice = await db.invoice.create({ data: {
      invoiceNumber: '2020001',
      date: '03/12/2020',
      body: JSON.stringify(DEFAULT_INVOICE)
    }})
    console.log(`Added example invoice with id=${invoice.id}`)
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
