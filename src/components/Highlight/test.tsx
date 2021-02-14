import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render the title', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead it’s back/i })
    ).toBeInTheDocument()
  })

  it('should render the subtitle', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Come see John’s new adventures/i })
    ).toBeInTheDocument()
  })
})
