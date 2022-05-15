import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  isActive: boolean
}

export const Container = styled(TouchableOpacity)`
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Category = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.textDark};
    `}
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`
