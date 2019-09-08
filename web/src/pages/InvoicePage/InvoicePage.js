import { useState, useRef, useEffect } from 'react'
import { useAuth, useQuery } from '@hammerframework/hammer-web'

import { Box, Button } from 'src/lib/primitives'
import { AppBar, Invoice } from 'src/components'
import { useMutation } from '@apollo/react-hooks'

const LOCALSTORAGE_KEY = 'invoice'

const FETCH_LATEST_INVOICE = gql`
  query FETCH_LATEST_INVOICE {
    invoicesNewest {
      id
      body
    }
  }
`

const SAVE_INVOICE = gql`
  mutation invoicesCreate($id: Int, $body: String!) {
    invoicesCreate(id: $id, body: $body) {
      id
      body
    }
  }
`

const DEFAULT_INVOICE = {
  title: 'I N V O I C E',
  companyName: 'Lolsoft Inc.',
  companyInfo: 'Peter Pistorius\nBusiness Address\n101010\nBerlin, Germany',
  recipient: 'Reliable customer\nBusiness address\n12345\nBerlin, Germany',
  information: [
    [{ value: 'Invoice #' }, { value: '001' }],
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
    [{ value: 'VAT' }, { value: 14 }, '0.0'],
    [{ value: 'Total' }, { value: '£' }, '0.0'],
  ],
  notesA: '',
  notesB: 'Invoice by Billable.me',
}

const parseInvoiceData = (data) => {
  if (data && data.invoicesNewest) {
    const { id, body } = data.invoicesNewest
    return {
      id,
      ...JSON.parse(body),
    }
  }

  const localInvoiceBody = localStorage.getItem(LOCALSTORAGE_KEY)
  if (localInvoiceBody) {
    return JSON.parse(localInvoiceBody)
  }

  return DEFAULT_INVOICE
}

const Page = () => {
  const [loading, setLoading] = useState(true)
  const [localSaveInvoiceLoading, setLocalSaveInvoiceLoading] = useState(false)

  // Do not fetch the user's invoice if they're not authenticated
  const { loading: authLoading, isAuthenticated } = useAuth()
  const { loading: fetchLoading, data } = useQuery(FETCH_LATEST_INVOICE, {
    skip: !(isAuthenticated === true),
  })

  useEffect(() => {
    if (!authLoading && !fetchLoading) {
      setLoading(false)
    }
  }, [authLoading, fetchLoading])

  const invoiceData = parseInvoiceData(data)
  const invoiceRef = useRef()
  const [saveInvoice, { loading: saveInvoiceLoading }] = useMutation(
    SAVE_INVOICE
  )

  return (
    <>
      <AppBar />
      <Box
        mx="auto"
        css={`
          max-width: 800px;
        `}
      >
        {loading ? (
          'Loading...'
        ) : (
          <>
            <Box my={2}>
              <Button
                onClick={() => {
                  if (saveInvoiceLoading || localSaveInvoiceLoading) {
                    return
                  }

                  const body = invoiceRef.current.getBody()
                  if (isAuthenticated) {
                    saveInvoice({
                      variables: {
                        id: invoiceData.id,
                        body: JSON.stringify(body),
                      },
                    })
                  } else {
                    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(body))
                    // mock something that makes it look like we're
                    // saving over the network
                    setLocalSaveInvoiceLoading(true)
                    setTimeout(() => setLocalSaveInvoiceLoading(false), 300)
                  }
                }}
              >
                {saveInvoiceLoading || localSaveInvoiceLoading
                  ? 'Saving...'
                  : 'Save'}
              </Button>
            </Box>
            <Invoice ref={invoiceRef} {...invoiceData} />
          </>
        )}
      </Box>
    </>
  )
}

export default Page
