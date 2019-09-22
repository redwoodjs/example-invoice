import { useQuery } from '@hammerframework/hammer-web'
import ContentLoader from 'react-content-loader'

import { INVOICES } from 'src/api'

const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)

const Invoices = () => {
  const { loading, data } = useQuery(INVOICES.query)

  // loading
  if (loading) {
    return <MyLoader />
  }

  const invoices = INVOICES.parseData(data)

  if (invoices) {
    return 'show invoices'
  }

  return 'you do not have any invoices, create one?'
}

export default Invoices
