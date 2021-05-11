import OrdersList, { OrdersListProps } from 'components/OrdersList'
import mockItems from 'components/OrdersList/mock'
import Profile from 'templates/Profile'

export default function orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      items: mockItems
    }
  }
}
