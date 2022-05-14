import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  border-radius: 5px;
  width: ${RFValue(300)}px;
  margin-right: ${RFValue(16)}px;
  padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.textDark};
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`

export const Content = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(32)}px;
  margin-top: ${RFValue(38)}px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.textDark};
`

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`
