import { useState } from 'react'
import InvoiceEditor from 'src/components/InvoiceEditor'

import Toolbar from './subcomponents/Toolbar'

export const QUERY = gql`
  query GET_INVOICE($id: ID) {
    invoice(id: $id) {
      id
      invoiceNumber
      date
      body
    }
  }
`

export const Loading = () => 'Loading...'

export const Success = ({ initialInvoice }) => {
  const [invoice, setInvoice] = useState(initialInvoice)

  return (
    <>
      <Toolbar getInvoiceData={() => invoice} />
      <InvoiceEditor invoice={invoice} setInvoice={setInvoice} />
    </>
  )
}
