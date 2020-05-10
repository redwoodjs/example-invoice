import { useMutation } from '@redwoodjs/web'

import { Box, Button } from 'src/lib/primitives'

const SET_INVOICE = gql`
  mutation SET_INVOICE($input: InvoiceInput!) {
    setInvoice(input: $input) {
      id
      invoiceNumber
      date
      body
    }
  }
`

export default ({ getInvoiceData }) => {
  const [setInvoice, { loading }] = useMutation(SET_INVOICE)

  const saveInvoice = () => {
    const invoice = getInvoiceData()

    if (!invoice) {
      return
    }

    const invoiceNumber = invoice.information[0][1].value
    const date = invoice.information[1][1].value
    setInvoice({
      variables: {
        input: {
          id: invoice.id,
          invoiceNumber,
          date,
          body: JSON.stringify(invoice),
        },
      },
    })
  }

  return (
    <>
      <Box
        mt={5}
        mb={4}
        css={`
          text-align: right;
        `}
      >
        <Button onClick={saveInvoice} disabled={loading}>
          {loading ? 'SAVING...' : 'SAVE'}
        </Button>
      </Box>
    </>
  )
}
