import { routes, Link } from '@redwoodjs/router'

export const QUERY = gql`
  query GET_INVOICE($search: string) {
    invoices(search: $search) {
      id
      invoiceNumber
      date
      recipient
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-gray-500 text-center py-4">
      You don't have any invoices,{' '}
      <Link to={routes.invoice({ id: '-1' })}>create one?</Link>
    </div>
  )
}

export const Failure = ({ error, refetch }) => {
  return (
    <div className="text-gray-500 text-center py-4">
      Uh oh, we couldn't fetch your invoices.{' '}
      <a href="#" onClick={() => refetch()}>
        Try again.
      </a>
      <div className="text-xs mt-2 text-gray-400">{error.message}</div>
    </div>
  )
}

export const Success = ({ invoices }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Invoice Date
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Recipient
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices.map(({ id, invoiceNumber, date, recipient }) => {
                return (
                  <tr key={'invoice-' + id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      {invoiceNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      {date}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      {recipient}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                      <Link to={routes.invoice({ id })}>Edit</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
