import { useState } from 'react'
import { Box, Link } from 'src/lib/primitives'
import { AppBar, PageContainer, Invoice } from 'src/components'
import { useAuth } from '@hammerframework/hammer-web'

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

const DemoInvoicePage = () => {
  const { loginWithRedirect } = useAuth()
  const [invoice, setInvoice] = useState(DEFAULT_INVOICE)

  return (
    <>
      <AppBar />
      <PageContainer>
        <Box
          my={3}
          mx="auto"
          width={400}
          p={3}
          bg="yellows.0"
          textAlign="center"
          borderRadius={4}
        >
          Want to save your invoice?{' '}
          <Link onClick={() => loginWithRedirect()}>Sign up!</Link>
        </Box>
        <Invoice
          invoice={invoice}
          onInvoiceChange={(newInvoice) => {
            setInvoice(newInvoice)
          }}
        />
      </PageContainer>
    </>
  )
}

export default DemoInvoicePage
