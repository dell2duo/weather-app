import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { HomeView as Home } from './pages/Home/View'
import { DetailsView as Details } from './pages/Details/View'
import Home from './pages/Home'

const Stack = createNativeStackNavigator()

const routes = [
  {
    name: 'home',
    component: Home,
  },
  {
    name: 'details',
    component: Details,
  },
]

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: true }}
      >
        {routes.map((route) => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
