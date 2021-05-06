import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead',
  price: 'R$ 199,99'
}

describe('<GameItem />', () => {
  it('should render the content game item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('img', {
        name: /red dead/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Red Dead/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/r\$ 199,99/i)).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
