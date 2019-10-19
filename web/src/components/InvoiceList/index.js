import { useCell } from 'src/lib/api'

import * as InvoiceList from './InvoiceList'

export default ({ queryOpts, ...rest }) => {
  const { query, parseData, Loader, Error, default: Component } = InvoiceList
  const { result } = useCell(
    {
      query,
      parseData,
      Loader,
      Error,
      Component,
      componentProps: rest,
    },
    queryOpts
  )
  return result
}
