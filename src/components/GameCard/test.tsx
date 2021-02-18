import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'GameCard',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()
  })

  it('should render the img', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/300x140'
    )
  })

  it('should render the price', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
