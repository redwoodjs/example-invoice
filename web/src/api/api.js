import { gql } from '@hammerframework/hammer-web'

export const INVOICES = {
  query: gql`
    query INVOICES {
      invoices {
        id
        body
      }
    }
  `,
  parseData: (data) => data && data.invoices,
}

export const INVOICE_LATEST = gql`
  query INVOICE($id: Int) {
    invoice(id: $id) {
      id
      body
    }
  }
`
