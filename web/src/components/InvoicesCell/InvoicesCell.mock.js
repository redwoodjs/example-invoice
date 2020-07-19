import { mockCellData, mockGraphQLQuery } from '@redwoodjs/testing'

export const standard = mockCellData(() => {
  return {
    invoices: [
      { id: 1, invoiceNumber: 1, date: '2020-07-18', __typename: 'Invoice' },
      { id: 2, invoiceNumber: 2, date: '2020-07-15', __typename: 'Invoice' },
      { id: 3, invoiceNumber: 3, date: '2020-07-14', __typename: 'Invoice' },
    ],
  }
})
