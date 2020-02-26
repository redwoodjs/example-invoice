import { useState } from 'react'

//import { InvoiceEditor } from 'src/components'

//import Toolbar from './subcomponents/Toolbar'

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

export const Loading = () => 'Loading...'

export const Failure = () => 'Oh no'

export const Empty = (props) => {
  return Success(props)
}

export const Success = (props) => {
  console.log(props)

  return null
  // return <div style={{height: 200, width: 200, background: 'red'}}>
  // sdsakdopsakd
  // 1<br/>
  // 1<br/>
  // 1<br/>
  // 1<br/>
  // </div>
  // const [invoice, setInvoice] = useState(initialInvoice)
  // return (
  //   <>
  //     xxxxx
  //     <Toolbar invoiceData={() => invoice} />
  //     <InvoiceEditor invoice={invoice} setInvoice={setInvoice} />
  //   </>
  // )
}
