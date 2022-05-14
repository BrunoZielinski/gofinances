import { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as C from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  type: 'up' | 'down'
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export const TransactionTypeButton = ({ title, type, ...rest }: Props) => {
  const [] = useState('')

  return (
    <C.Button activeOpacity={0.7} {...rest}>
      <C.Icon name={icon[type]} type={type} />
      <C.ButtonTitle>{title}</C.ButtonTitle>
    </C.Button>
  )
}
