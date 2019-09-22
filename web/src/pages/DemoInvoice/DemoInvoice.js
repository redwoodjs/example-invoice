import { useState } from 'react'
import { Box, Link } from 'src/lib/primitives'
import { AppBar, PageContainer, Invoice } from 'src/components'
import { useAuth } from '@hammerframework/hammer-web'

const DemoInvoicePage = () => {
  const { loginWithRedirect } = useAuth()
  const [invoice, setInvoice] = useState(Invoice.DEFAULT_INVOICE)

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
