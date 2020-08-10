import { navigate, routes } from '@redwoodjs/router'

import Button from 'src/components/Button'

import InvoicesCell from './subcomponents/InvoicesCell'

const InvoicesPage = () => {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap mb-4">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Invoices
          </h3>
        </div>

        <div className="ml-4 mt-2 flex-shrink-0">
          <span className="inline-flex rounded-md shadow-sm">
            <Button onClick={() => navigate(routes.invoice({ id: 'new' }))}>
              Create new invoice
            </Button>
          </span>
        </div>
      </div>
      <InvoicesCell />
    </div>
  )
}

export default InvoicesPage
