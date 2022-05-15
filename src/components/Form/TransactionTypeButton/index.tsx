import { TouchableOpacityProps } from 'react-native'

import * as C from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  isActive: boolean
  type: 'up' | 'down'
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: Props) => {
  return (
    <C.Button activeOpacity={0.7} type={type} isActive={isActive} {...rest}>
      <C.Icon name={icon[type]} type={type} />
      <C.ButtonTitle>{title}</C.ButtonTitle>
    </C.Button>
  )
}
