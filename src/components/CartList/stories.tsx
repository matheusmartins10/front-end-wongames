import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'
import listMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 333,00',
  items: listMock
}
