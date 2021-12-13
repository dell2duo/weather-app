import React, { createContext, ReactNode } from 'react'
import { IStore } from '../domain/interfaces/IStore'
import { Exports, useStore } from '../domain/implementations/Store'

const WeatherContext = createContext<Exports | undefined>(undefined)

const StoreProvider: React.FC<ReactNode> = ({ children }) => {
  const { favoriteCity, getCities, removeCity, saveCity, cities } = useStore()
  return (
    <WeatherContext.Provider
      value={{ favoriteCity, getCities, removeCity, saveCity, cities }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, StoreProvider }
