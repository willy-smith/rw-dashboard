import { render } from '@redwoodjs/testing/web'

import Summary from './Summary'

describe('Summary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Summary />)
    }).not.toThrow()
  })
})
