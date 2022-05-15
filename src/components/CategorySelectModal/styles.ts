import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
  isActive: boolean
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
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

export const Category = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})<ButtonProps>`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(16)}px;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.secondaryLight};
    `}
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
  padding: ${RFValue(16)}px;
`
