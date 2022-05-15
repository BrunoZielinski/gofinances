import * as yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import * as C from './styles'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { CategorySelectModal } from '../../components/CategorySelectModal'
import { InputControlled } from '../../components/Form/InputControlled'

interface FormData {
  name: string
  amount: number
}

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  amount: yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('Informe um valor positivo')
    .required('Campo obrigatório')
})

const Register = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })
  const [transactionType, setTransactionType] = useState('')
  const [modalVisibility, setModalVisibility] = useState(false)

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleRegister = (formData: Partial<FormData>) => {
    if (!transactionType) return Alert.alert('Selecione um tipo de transação')

    if (category.key === 'category')
      return Alert.alert('Selecione uma categoria')

    const data = {
      name: formData.name,
      amount: formData.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
    reset()
    setTransactionType('')
    setCategory({
      key: 'category',
      name: 'Categoria'
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <C.Container>
        <C.Header>
          <C.Title>Cadastro</C.Title>
        </C.Header>

        <C.Form>
          <C.Fields>
            <InputControlled
              name="name"
              control={control}
              placeholder="Nome"
              autoCorrect={false}
              error={errors.name}
              autoCapitalize="sentences"
            />

            <InputControlled
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount}
            />

            <C.TransactionTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionTypeSelect('up')}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionTypeSelect('down')}
              />
            </C.TransactionTypes>

            <CategorySelectButton
              title={category.name}
              onPress={() => setModalVisibility(true)}
            />
          </C.Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </C.Form>

        <Modal visible={modalVisibility} animationType="slide">
          <CategorySelectModal
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setModalVisibility(false)}
          />
        </Modal>
      </C.Container>
    </TouchableWithoutFeedback>
  )
}

export default Register
