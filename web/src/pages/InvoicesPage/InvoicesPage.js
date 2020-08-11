import { navigate, routes } from '@redwoodjs/router'

import Button from 'src/components/Button'

import InvoicesCell from './subcomponents/InvoicesCell'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const InvoicesPage = () => {
  return (
    <AppLayout title="Invoices">
      <InvoicesCell />
    </AppLayout>
  )
}

export default InvoicesPage
