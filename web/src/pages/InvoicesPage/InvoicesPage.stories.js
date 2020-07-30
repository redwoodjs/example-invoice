import InvoicesPage from './InvoicesPage'

export const standard = () => {
  return <InvoicesPage />
}

export const failure = () => {
  mockGraphQLQuery('GET_INVOICE', (_vars, { ctx }) => {
    ctx.status(401)
  })
  return <InvoicesPage />
}

export default { title: 'Pages/InvoicesPage' }
