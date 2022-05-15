import { TouchableOpacityProps } from 'react-native'
import * as C from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export const CategorySelectButton = ({ title, ...rest }: Props) => {
  return (
    <C.Container activeOpacity={0.7} {...rest}>
      <C.Category isActive={title !== 'Categoria'}>{title}</C.Category>
      <C.Icon name="chevron-down" />
    </C.Container>
  )
}
