import { useRouter } from 'next/router'

import Game from 'templates/Game'

export default function Index() {
  const router = useRouter()

  console.log(router)

  return <Game />
}
