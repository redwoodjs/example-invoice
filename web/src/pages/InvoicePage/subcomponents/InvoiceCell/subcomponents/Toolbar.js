import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import Button from 'src/components/Button'

const MUTATION = gql`
  mutation InvoiceMutation($input: InvoiceInput!) {
    setInvoice(input: $input) {
      id
      invoiceNumber
      date
      body
    }
  }
`

export default ({ getInvoiceData }) => {
  const [setInvoice, { loading }] = useMutation(MUTATION)

  const saveInvoice = async () => {
    const invoice = getInvoiceData()

    if (!invoice) {
      // why would this happen?
      return
    }

    const { id } = invoice

    const invoiceNumber = invoice.information[0][1].value
    const date = invoice.information[1][1].value

    const d = await setInvoice({
      variables: {
        input: {
          id,
          invoiceNumber,
          date,
          body: JSON.stringify(invoice),
        },
      },
    })

    if (d?.data?.setInvoice?.id !== id) {
      navigate(routes.invoice({ id: d?.data?.setInvoice?.id }))
    }
  }

  return (
    <>
      <div className="text-right">
        <Button onClick={saveInvoice} disabled={loading}>
          {loading ? 'SAVING...' : 'SAVE'}
        </Button>
      </div>
    </>
  )
}
