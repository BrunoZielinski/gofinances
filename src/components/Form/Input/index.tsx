import { TextInputProps } from 'react-native'

import * as C from './styles'

interface Props extends TextInputProps {
  error?: boolean
}

export const Input = ({ error, ...rest }: Props) => {
  return <C.Input error={error} {...rest} placeholderTextColor="#969CB2" />
}
