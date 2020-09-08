import InvoicesPage from './InvoicesPage'

export const generated = () => {
  return <InvoicesPage />
}

export const failure = () => {
  mockGraphQLQuery('GET_INVOICE', (_vars, { ctx }) => {
    ctx.status(401)
  })
  return <InvoicesPage />
}

export default { title: 'Pages/InvoicesPage' }
