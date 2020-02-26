export const schema = gql`
  type Invoice {
    id: ID!
    body: String!
    date: String!
    invoiceNumber: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    invoice(id: ID): Invoice
  }

  input InvoiceInput {
    id: ID
    date: String!
    invoiceNumber: String!
    body: String!
  }

  type Mutation {
    setInvoice(input: InvoiceInput!): Invoice
  }
`
