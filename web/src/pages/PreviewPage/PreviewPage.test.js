import { render } from '@redwoodjs/testing'

import PreviewPage from './PreviewPage'

describe('PreviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PreviewPage />)
    }).not.toThrow()
  })
})
