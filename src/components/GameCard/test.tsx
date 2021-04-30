import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

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
  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    // preço tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(<GameCard promotionalPrice="R$ 15,00" {...props} />)
    // preço tenha line-through (200)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter line-through (15)

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
  it('should render a filled Favorite icon when favorite is true ', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
