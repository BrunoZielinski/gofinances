import { TextInputProps } from 'react-native'

import * as C from './styles'

interface Props extends TextInputProps {}

export const Input = ({ ...rest }: Props) => {
  return <C.Input {...rest} placeholderTextColor="#969CB2" />
}
