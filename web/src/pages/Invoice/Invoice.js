import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@hammerframework/hammer-web'

import { Box, Button } from 'src/lib/primitives'
import { AppBar, Invoice, PageContainer } from 'src/components'
import { INVOICE_LATEST, INVOICE_SAVE } from 'src/api'

import FirstInvoice from './components/FirstInvoice'
import { Redirect } from '@hammerframework/hammer-web/dist/Router'

const InvoicePage = () => {
  const [invoice, setInvoice] = useState(Invoice.DEFAULT_INVOICE)
  const [firstInvoice, setFirstInvoice] = useState(true)
  const { loading, data } = useQuery(INVOICE_LATEST)
  const [saveInvoice, { loading: mutationLoading }] = useMutation(INVOICE_SAVE)

  useEffect(() => {
    // the data has been fetched.
    if (data?.invoice) {
      setInvoice(JSON.parse(data.invoice.body))
      setFirstInvoice(false)
    }
  }, [data])

  if (window.location.pathname === '/invoice/latest' && data?.invoice?.id) {
    return <Redirect to={`/invoice/${data?.invoice?.id}`} />
  }

  return (
    <>
      <AppBar />
      <PageContainer>
        {loading ? (
          'Loading...'
        ) : (
          <>
            {firstInvoice && <FirstInvoice />}
            <Box my="md" textAlign="right">
              <Button
                onClick={() => {
                  saveInvoice({
                    variables: {
                      id: data?.invoice?.id,
                      body: JSON.stringify(invoice),
                    },
                  })
                }}
              >
                {mutationLoading ? 'Saving...' : 'Save'}
              </Button>
            </Box>
            <Invoice invoice={invoice} onInvoiceChange={setInvoice} />
          </>
        )}
      </PageContainer>
    </>
  )
}

export default InvoicePage
