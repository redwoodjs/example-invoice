import { useState } from 'react'

import { InvoiceEditor } from 'src/components'

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

export const afterQuery = ({ invoice }) => {
  if (!invoice) {
    return
  }

  const initialInvoice = {
    ...invoice,
    ...JSON.parse(invoice.body),
  }

  return {
    initialInvoice,
  }
}

export const Loading = () => 'Loading...'

export const Success = ({ initialInvoice }) => {
  const [invoice, setInvoice] = useState(initialInvoice)
  return (
    <>
      <Toolbar invoiceData={() => invoice} />
      <InvoiceEditor invoice={invoice} setInvoice={setInvoice} />
    </>
  )
}
