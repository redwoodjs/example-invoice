import { useState, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useMutation } from '@hammerframework/hammer-web'
import usePopper from 'use-popper'

import { Box, Button } from 'src/lib/primitives'
import { AppBar, PageContainer, Invoice, InvoiceList } from 'src/components'

const MUTATION_INVOICE_SAVE = gql`
  mutation INVOICE_SAVE($input: InvoiceSaveInput!) {
    invoiceSave(input: $input) {
      id
      date
      invoiceNumber
      body
    }
  }
`

const Toolbar = ({ invoiceData }) => {
  const [showInvoices, setShowInvoices] = useState(false)
  const { reference, popper } = usePopper({ placement: 'bottom' })

  // TODO: Autosave
  const [mutationSaveInvoice, { loading: mutationLoading }] = useMutation(
    MUTATION_INVOICE_SAVE
  )

  const handleSaveClick = () => {
    const invoice = invoiceData()
    const invoiceNumber = invoice.information[0][1].value
    const date = invoice.information[1][1].value

    mutationSaveInvoice({
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

  // TODO: Use a ref to hide/ show the invoices?
  useHotkeys('escape', () => {
    setShowInvoices(false)
  })
  useHotkeys('cmd+*,ctrl+*', (event) => {
    switch (event.key) {
      case 's':
        event.preventDefault()
        handleSaveClick()
        break
      case 'l':
        event.preventDefault()
        setShowInvoices(!showInvoices)
        break
    }
  })

  return (
    <>
      <Box
        mt={5}
        mb={4}
        css={`
          display: flex;
          flex-direction: row;
        `}
      >
        <div>
          <Button
            ref={reference.ref}
            onClick={() => {
              setShowInvoices(!showInvoices)
            }}
          >
            INVOICES
          </Button>
        </div>
        <div
          css={`
            text-align: right;
            flex: 1;
          `}
        >
          <Button onClick={handleSaveClick} disabled={mutationLoading}>
            {mutationLoading ? 'SAVING...' : 'SAVE'}
          </Button>
        </div>
      </Box>

      {showInvoices && (
        <Box
          mt={1}
          ref={popper.ref}
          style={popper.styles}
          data-placement={popper.placement}
          css={`
            border: 1px #333 solid;
            border-radius: 3px;
            background: white;
            box-shadow: 1px 1px 3px #000;
            width: 320px;
            height: 600px;
            overflow: auto;
          `}
        >
          <InvoiceList
            onRowClick={() => {
              setShowInvoices(false)
            }}
          />
        </Box>
      )}
    </>
  )
}

export default ({ match }) => {
  const id = match.params.id
  return (
    <>
      <AppBar />
      <PageContainer>
        <Toolbar />
        <Invoice queryOpts={{ variables: { id } }} />
      </PageContainer>
    </>
  )
}
