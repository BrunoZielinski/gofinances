import { TextInput } from 'react-native'

import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Input = styled(TextInput)`
  border-radius: 5px;
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(8)}px;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${props => props.theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.shape};
`
