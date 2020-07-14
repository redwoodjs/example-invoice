import { render } from '@redwoodjs/testing'

import InvoicesPage from './InvoicesPage'

describe('InvoicesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoicesPage />)
    }).not.toThrow()
  })
})
