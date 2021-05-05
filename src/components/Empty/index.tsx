import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="https://raw.githubusercontent.com/Won-Games/client/026d6fb5fa23337ec882683ef94438ffa6ee4db2/public/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
