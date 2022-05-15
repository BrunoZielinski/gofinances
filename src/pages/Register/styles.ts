import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(37)}px 0 ${RFValue(19)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;
  justify-content: space-between;
`

export const Fields = styled.View`
  margin-bottom: ${RFValue(16)}px;
`

export const TransactionTypes = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(8)}px;
  justify-content: space-between;
  margin-bottom: ${RFValue(16)}px;
`
