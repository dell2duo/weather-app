import { Provider } from 'mobx-react'
import React from 'react'
import { Text, View } from 'react-native'
import Routes from './Routes'

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}
