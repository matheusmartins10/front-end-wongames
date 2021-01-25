import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ color, theme }) => css`
    color: ${theme.colors[color!]};
  `}
`
