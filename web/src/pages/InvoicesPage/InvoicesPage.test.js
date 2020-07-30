import { render, waitFor } from '@redwoodjs/testing'

import InvoicesPage from './InvoicesPage'

describe('InvoicesPage', () => {
  it('displays the correct error when the network request breaks', async () => {
    mockGraphQLQuery('GET_INVOICE', (_vars, { ctx }) => {
      ctx.status(500)
    })
    const screen = render(<InvoicesPage />)
    await waitFor(() =>
      expect(screen.queryByText(/Uh Oh/i)).toBeInTheDocument()
    )
  })

  it('renders successfully', async () => {
    const screen = render(<InvoicesPage />)
    await waitFor(() =>
      expect(screen.queryByText(/Kgosi/i)).toBeInTheDocument()
    )
  })
})
