import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          height: RFValue(72),
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Resume"
        component={Register}
        options={{
          tabBarLabel: 'Resumo',
          tabBarIcon: ({ color, size }) => (
            <Feather name="pie-chart" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
