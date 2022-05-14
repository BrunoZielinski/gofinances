import { TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Button = styled(TouchableOpacity)`
  margin-top: auto;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(18)}px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
`
