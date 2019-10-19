import { Link } from 'react-router-dom'

export const query = gql`
  query GET_INVOICE_LIST($search: String) {
    getInvoiceList(search: $search) {
      id
      invoiceNumber
      date
    }
  }
`

export const parseData = ({ getInvoiceList }) => ({ invoices: getInvoiceList })

export { default as Loader } from './Loader'

const Invoices = ({ invoices = [], onRowClick }) => {
  if (invoices.length === 0) {
    return (
      <div>
        You do not have any invoices,{' '}
        <Link to="/invoices/new">create one?</Link>
      </div>
    )
  }

  return (
    <ol
      css={`
        list-style: none;
        padding: 0;
      `}
    >
      {invoices.map(({ id, invoiceNumber, date }) => (
        <li
          key={id}
          css={`
            padding: 8px;
            border-bottom: 1px #999 solid;
          `}
        >
          <Link to={`/invoice/${id}`} onClick={() => onRowClick(id)}>
            Invoice #{invoiceNumber}
          </Link>
          <br />
          <p
            css={`
              font-size: 14px;
              color: #999;
            `}
          >
            {date}
          </p>
        </li>
      ))}
    </ol>
  )
}

export default Invoices
