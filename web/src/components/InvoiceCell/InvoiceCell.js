import { useState } from 'react'
import InvoiceEditor from 'src/components/InvoiceEditor'

import Toolbar from './subcomponents/Toolbar'

export const QUERY = gql`
  query GET_INVOICE($id: Int) {
    invoice(id: $id) {
      id
      invoiceNumber
      date
      body
    }
  }
`

export const afterQuery = ({ invoice }) => {
  if (!invoice) {
    return undefined
  }
  const { id, invoiceNumber, date, body } = invoice
  return {
    initialInvoice: {
      id,
      invoiceNumber,
      date,
      ...JSON.parse(body),
    },
  }
}

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
