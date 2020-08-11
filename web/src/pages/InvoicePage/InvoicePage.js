import InvoiceCell from './subcomponents/InvoiceCell'
import AppLayout from 'src/layouts/AppLayout'

export default ({ id }) => {
  return (
    <AppLayout>
      <InvoiceCell id={id} />
    </AppLayout>
  )
}
