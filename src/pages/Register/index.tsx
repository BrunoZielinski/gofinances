import * as C from './styles'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

const Register = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Cadastro</C.Title>
      </C.Header>

      <C.Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />

        <C.TransactionTypes>
          <TransactionTypeButton type="up" title="Income" />
          <TransactionTypeButton type="down" title="Outcome" />
        </C.TransactionTypes>

        <Button title="Enviar" />
      </C.Form>
    </C.Container>
  )
}

export default Register
