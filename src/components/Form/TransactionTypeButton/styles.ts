import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'up' | 'down'
}

export const Button = styled(TouchableOpacity)`
  width: 48%;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(18)}px 0;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(20)}px;

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
`

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.regular};
`
