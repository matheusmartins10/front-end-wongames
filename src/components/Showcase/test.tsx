import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Showcase />)

    screen.logTestingPlaygroundURL()
  })
})