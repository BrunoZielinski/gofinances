import { TouchableOpacityProps } from 'react-native'

import * as C from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <C.Button activeOpacity={0.7} {...rest}>
      <C.ButtonTitle>{title}</C.ButtonTitle>
    </C.Button>
  )
}
