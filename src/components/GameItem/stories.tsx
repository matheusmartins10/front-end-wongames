import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

Default.args = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead',
  price: 'R$ 199,99'
}

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
