export const schema = gql`
  type Invoice {
    id: Int!
    body: String!
    date: String!
    invoiceNumber: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    invoice(id: Int): Invoice
  }

  input InvoiceInput {
    id: Int
    date: String!
    invoiceNumber: String!
    body: String!
  }

  type Mutation {
    setInvoice(input: InvoiceInput!): Invoice
  }
`
