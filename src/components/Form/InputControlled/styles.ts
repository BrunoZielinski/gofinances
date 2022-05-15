import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View``

export const Error = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-bottom: ${RFValue(4)}px;
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
`
