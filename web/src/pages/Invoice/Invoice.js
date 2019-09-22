import { useState, useEffect } from 'react'
import { useQuery } from '@hammerframework/hammer-web'

import { Box, Button } from 'src/lib/primitives'
import { AppBar, Invoice, PageContainer } from 'src/components'

import { INVOICE_LATEST } from 'src/api'

const DEFAULT_INVOICE = {
  title: 'I N V O I C E',
  companyName: 'Example Inc.',
  companyInfo: 'example.com\ninfo@example.com',
  recipient:
    'Michael Scott Paper Company Inc.\n1725 Slough Avenue\nScranton, Pennsylvania',
  information: [
    [{ value: 'Invoice #' }, { value: '044' }],
    [
      { value: 'Date' },
      { value: new Intl.DateTimeFormat().format(new Date()) },
    ],
  ],
  lineItems: [
    [{ value: 'Description' }, { value: 'Quantity' }, { value: 'Price' }],
    [{ value: 'Wheel of cheese' }, { value: 1 }, { value: 500 }],
    [{ value: 'Jar of sausages' }, { value: 2 }, { value: 2.99 }],
    [{ value: 'Tin of waffles' }, { value: 2 }, { value: 3.01 }],
  ],
  summary: [
    [{ value: 'Subtotal' }, undefined, '0.0'],
    [{ value: 'Tax Rate' }, { value: 0 }, '0.0'],
    [{ value: 'Total' }, { value: '$' }, '0.0'],
  ],
  notesA: '',
  notesB: 'Invoice by billable.me',
}

// const parseInvoiceData = (data) => {
//   if (data && data.invoicesNewest) {
//     const { id, body } = data.invoicesNewest
//     return {
//       id,
//       ...JSON.parse(body),
//     }
//   }

//   const localInvoiceBody = localStorage.getItem(LOCALSTORAGE_KEY)
//   if (localInvoiceBody) {
//     return JSON.parse(localInvoiceBody)
//   }

//   return DEFAULT_INVOICE
// }

const InvoicePage = () => {
  // fetch the latest invoice
  const [invoice, setInvoice] = useState(DEFAULT_INVOICE)
  const [firstInvoice, setFirstInvoice] = useState(true)

  const { loading, data } = useQuery(INVOICE_LATEST)

  useEffect(() => {
    // the data has been fetched.
    if (data?.invoice) {
      setInvoice(data?.invoice)
      setFirstInvoice(false)
    }
  }, [data])

  return (
    <>
      <AppBar />
      <PageContainer>
        {loading ? (
          'Loading...'
        ) : (
          <>
            <Box my={2}>
              <Button onClick={() => {}}>Save</Button>
            </Box>
            <Invoice invoice={invoice} onInvoiceChange={setInvoice} />
          </>
        )}
      </PageContainer>
    </>
  )
}

export default InvoicePage
