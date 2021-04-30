import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render the title, description and price', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /game title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /wishlist/i
      })
    ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
