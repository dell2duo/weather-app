import React from 'react'
import Routes from './Routes'
import { StoreProvider } from './context/WeatherContext'
import { ThemeProvider } from 'styled-components/native'
import dark from './themes/dark'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito'
import {
  UserConfigContext,
  UserConfigProvider,
} from './context/UserConfigContext'

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <UserConfigProvider>
      <StoreProvider>
        <ThemeProvider theme={dark}>
          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </UserConfigProvider>
  )
}
