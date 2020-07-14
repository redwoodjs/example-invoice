import { msw } from '@redwoodjs/testing'

import InvoicesPage from './InvoicesPage'

export const generated = () => {
  return <InvoicesPage />
}

// export const failure = () => {
//   msw.graphql.query('GetInvoices', (req, res, ctx) => {
//     return res(ctx.errors([{ message: 'The server exploded.' }]))
//   })
//   return <InvoicesPage />
// }

export default { title: 'Pages/InvoicesPage' }
