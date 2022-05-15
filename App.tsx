import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { useCallback, useEffect } from 'react'
import { AppRoutes } from './src/routes/app.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular
  })

  const handleLoading = useCallback(async () => {
    if (!fontsLoaded) {
      await SplashScreen.preventAutoHideAsync()
    } else {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useEffect(() => {
    handleLoading()
  }, [handleLoading])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
