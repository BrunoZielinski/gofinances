import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionTypeProps {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  border-radius: 5px;
  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(17)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Amount = styled.Text<TransactionTypeProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ type }) =>
    type === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'negative' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
`

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(24)}px;
  justify-content: space-between;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`
