import { gql } from '@hammerframework/hammer-web'

export const INVOICE_SAVE = gql`
  mutation INVOICE_SAVE($id: String, $body: String!) {
    invoiceSave(id: $id, body: $body) {
      id
      body
    }
  }
`

export const INVOICES = gql`
  query INVOICES {
    invoices {
      id
      body
    }
  }
`
export const INVOICE_LATEST = gql`
  query INVOICE_LATEST($id: String) {
    invoice(id: $id) {
      id
      body
    }
  }
`
