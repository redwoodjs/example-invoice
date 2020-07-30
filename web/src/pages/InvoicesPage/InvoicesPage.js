import { navigate, routes } from '@redwoodjs/router'
import InvoicesCell from 'src/components/InvoicesCell'

const InvoicesPage = () => {
  const [search, setSearch] = React.useState()

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap mb-4">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Invoices
          </h3>
        </div>

        <div className="ml-4 mt-2 flex-shrink-0">
          <input
            type="search"
            className="mr-4 p-2 text-sm border rounded-md"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => navigate(routes.newInvoice())}
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            >
              Create new invoice
            </button>
          </span>
        </div>
      </div>
      <InvoicesCell search={search} />
    </div>
  )
}

export default InvoicesPage
