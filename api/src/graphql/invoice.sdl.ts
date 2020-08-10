export const schema = gql`
  type Invoice {
    id: String!
    body: String!
    date: String!
    invoiceNumber: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    invoices: [Invoice]
    invoice(id: String!): Invoice
  }

  input InvoiceInput {
    id: String
    date: String!
    invoiceNumber: String!
    body: String!
  }
  type Mutation {
    setInvoice(input: InvoiceInput!): Invoice
  }
`
