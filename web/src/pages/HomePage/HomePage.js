import { AppBar, PageContainer } from 'src/components'

import InvoiceCell from 'src/components/InvoiceCell'

export default () => {
  return (
    <div>
      <AppBar />
      <PageContainer>
        x
        <InvoiceCell id={1} />
      </PageContainer>
    </div>
  )
}
