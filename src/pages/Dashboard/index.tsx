import * as C from './styles'
import { HighLighCard } from '../../components/HighLighCard'
import { TransactionCard } from '../../components/TransactionCard'

import { TransactionCardProps } from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id: string
}

const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2020',
      type: 'positive'
    },
    {
      id: '2',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '10/04/2020',
      type: 'negative'
    }
  ]

  return (
    <C.Container>
      <C.Header>
        <C.UserWrapper>
          <C.UserInfo>
            <C.Photo source={{ uri: 'http://github.com/brunozielinski.png' }} />

            <C.User>
              <C.UserGreeting>Olá,</C.UserGreeting>
              <C.UserName>Bruno</C.UserName>
            </C.User>
          </C.UserInfo>

          <C.Icon name="power" />
        </C.UserWrapper>
      </C.Header>

      <C.HighLighCards>
        <HighLighCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLighCard
          type="down"
          title="Saldos"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighLighCard
          type="total"
          title="Total"
          amount="16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </C.HighLighCards>

      <C.Transactions>
        <C.Title>Listagem</C.Title>

        <C.TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </C.Transactions>
    </C.Container>
  )
}

export default Dashboard
