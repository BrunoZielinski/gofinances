import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  error?: boolean
}

export const Input = styled(TextInput)<Props>`
  border-radius: 5px;
  font-size: ${RFValue(18)}px;
  border: 1px solid transparent;
  margin-bottom: ${RFValue(8)}px;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${props => props.theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.shape};

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.attention};
    `}
`
