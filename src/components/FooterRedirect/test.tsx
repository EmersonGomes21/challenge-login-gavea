import { render, screen } from '@testing-library/react'

import FooterRedirect from '.'

describe('<FooterRedirect/>', () => {
  it('should render the heading', () => {
    const { container } = render(<FooterRedirect />)
    expect(
      screen.getByRole('heading', { name: /FooterRedirect/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
