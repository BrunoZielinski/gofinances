import * as C from './styles'

interface Props {
  title: string
  amount: string
  lastTransaction: string
  type: 'up' | 'down' | 'total'
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const HighLighCard = ({
  type,
  title,
  amount,
  lastTransaction
}: Props) => {
  return (
    <C.Container type={type}>
      <C.Header>
        <C.Title type={type}>{title}</C.Title>
        <C.Icon name={icon[type]} type={type} />
      </C.Header>

      <C.Content>
        <C.Amount type={type}>{amount}</C.Amount>

        <C.LastTransaction type={type}>{lastTransaction}</C.LastTransaction>
      </C.Content>
    </C.Container>
  )
}
