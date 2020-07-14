import { Loading, Empty, Failure, Success } from './InvoicesCell'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  // find all the files that have *.mock.*
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...getMockData('standard')} /> : null
}

export default { title: 'Cells/InvoicesCell' }
