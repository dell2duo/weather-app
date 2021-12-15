import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from './pages/Details'
import Home from './pages/Home'
import { CityWeather } from './domain/models/CityWeather'
import { WeatherContext } from './context/WeatherContext'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

const routes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Details',
    component: Details,
  },
]

const Routes: React.FC = () => {
  const { loadingStorage } = useContext(WeatherContext)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: true }}
      >
        {!loadingStorage ? (
          routes.map((route) => {
            return (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
              />
            )
          })
        ) : (
          <Stack.Screen name="Loading" component={AppLoading} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
