import * as C from './styles'

interface Category {
  name: string
  icon: string
}

export interface TransactionCardProps {
  date: string
  title: string
  amount: string
  category: Category
  type: 'positive' | 'negative'
}

interface Props {
  data: TransactionCardProps
}

export const TransactionCard = ({ data }: Props) => {
  return (
    <C.Container>
      <C.Title>{data.title}</C.Title>
      <C.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </C.Amount>

      <C.Footer>
        <C.Category>
          <C.Icon name={data.category.icon} />
          <C.CategoryName>{data.category.name}</C.CategoryName>
        </C.Category>

        <C.Date>{data.date}</C.Date>
      </C.Footer>
    </C.Container>
  )
}
