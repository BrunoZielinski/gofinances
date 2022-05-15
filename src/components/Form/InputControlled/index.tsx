import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'
import * as C from './styles'

interface Error {
  message: string
}

interface Props extends TextInputProps {
  name: string
  error?: Error
  control: Control
}

export const InputControlled = ({ error, name, control, ...rest }: Props) => {
  return (
    <C.Container>
      {!!error && <C.Error>{error.message}*</C.Error>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            error={!!error}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />
    </C.Container>
  )
}
