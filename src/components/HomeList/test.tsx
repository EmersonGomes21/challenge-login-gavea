import { render, screen } from '@testing-library/react'

import HomeList from '.'

describe('<HomeList/>', () => {
  it('should render the heading', () => {
    const { container } = render(<HomeList />)
    expect(
      screen.getByRole('heading', { name: /HomeList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
