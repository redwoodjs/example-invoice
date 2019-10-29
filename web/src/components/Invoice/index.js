import { useCell } from '@hammerframework/hammer-web'

import * as Invoice from './Invoice'

export default ({ queryOpts, ...rest }) => {
  const { query, parseData, Loader, Error, default: Component } = Invoice
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
