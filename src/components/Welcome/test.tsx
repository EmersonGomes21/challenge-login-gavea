import { render, screen } from '@testing-library/react'

import Welcome from '.'

describe('<Welcome/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Welcome />)
    expect(
      screen.getByRole('heading', { name: /Welcome/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
