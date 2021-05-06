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
