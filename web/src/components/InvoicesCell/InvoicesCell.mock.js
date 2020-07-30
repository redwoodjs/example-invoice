export const standard = ({ search = '' } = {}) => {
  return {
    invoices: [
      {
        id: 1,
        invoiceNumber: 1,
        date: '2020-07-18',
        recipient: 'John',
        __typename: 'Invoice',
      },
      {
        id: 2,
        invoiceNumber: 2,
        date: '2020-07-15',
        recipient: 'Sally',
        __typename: 'Invoice',
      },
      {
        id: 3,
        invoiceNumber: 3,
        date: '2020-07-14',
        recipient: 'Kgosi',
        __typename: 'Invoice',
      },
    ].filter(
      ({ recipient }) =>
        search.length === 0 ||
        recipient.toLowerCase().startsWith(search.toLowerCase())
    ),
  }
}
