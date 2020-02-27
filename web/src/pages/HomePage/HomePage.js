import InvoiceCell from 'src/components/InvoiceCell'

import { AppBar, PageContainer } from 'src/components'

export default () => {
  return (
    <div>
      <AppBar />
      <PageContainer>
        <InvoiceCell id={1} />
      </PageContainer>
    </div>
  )
}
