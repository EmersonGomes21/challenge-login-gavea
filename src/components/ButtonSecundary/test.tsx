import { render, screen } from '@testing-library/react'

import ButtonSecundary from '.'

describe('<ButtonSecundary/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonSecundary />)
    expect(
      screen.getByRole('heading', { name: /ButtonSecundary/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
