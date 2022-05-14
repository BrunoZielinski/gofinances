import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

import Register from './src/pages/Register'
import theme from './src/global/styles/theme'
import { useCallback, useEffect } from 'react'

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
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Register />
    </ThemeProvider>
  )
}
