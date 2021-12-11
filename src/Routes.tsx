import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './pages/Home/Provider'
// import { HomeView } from './pages/Home/View'

const Stack = createNativeStackNavigator()

const routes = [
  {
    name: 'home',
    component: Home,
  },
]

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
