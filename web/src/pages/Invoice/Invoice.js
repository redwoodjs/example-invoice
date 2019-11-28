import { AppBar, PageContainer } from 'src/components'

import InvoiceCell from './components/InvoiceCell'

export default ({ match }) => {
  const id = match.params.id

  return (
    <>
      <AppBar />
      <PageContainer>
        <InvoiceCell id={id} />
      </PageContainer>
    </>
  )
}
