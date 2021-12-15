import { Component, useEffect } from 'react'
import { IStore } from '../interfaces/IStore'
import { City } from '../models/City'
import AsyncStorage from '@react-native-async-storage/async-storage'

import React from 'react'
import { View } from 'react-native'

// import { Container } from './styles';

export type Exports = {
  getCities: () => Promise<City[]>
  removeCity: (city: City) => Promise<void>
  saveCity: (city: City) => Promise<void>
  favoriteCity: (city: City) => Promise<void>
  cities: City[]
  loadingStorage: boolean
}

export const useStore = (): Exports => {
  const [cities, setCities] = React.useState<City[]>([])
  const [loadingStorage, setLoadingStorage] = React.useState<boolean>(true)

  useEffect(() => {
    // cleanMemory()
    AsyncStorage.getItem('@cities').then((cities) => {
      if (cities) {
        setCities(JSON.parse(cities))
      }
      setLoadingStorage(false)
    })
  }, [])

  const getCities = async (): Promise<City[]> => {
    if (cities.length === 0) {
      try {
        const value = await AsyncStorage.getItem('@cities')
        if (!value) {
          return [] as City[]
        }
        const parsedValue: City[] = JSON.parse(value!)
        setCities(parsedValue)
        return parsedValue
      } catch (error) {
        throw new Error('Error getting cities')
      }
    }
    return cities
  }

  const removeCity = async (city: City): Promise<void> => {
    const cities = await getCities()
    const newCities = cities.filter((c) => c.name !== city.name)
    setCities(newCities)
    try {
      await AsyncStorage.setItem('@cities', JSON.stringify(newCities))
      await getCities()
    } catch (error) {
      throw new Error('Error removing city')
    }
  }

  const saveCity = async (city: City): Promise<void> => {
    if (cities.find((c) => c.name === city.name)) {
      return
    }
    const newCities = [...cities, city]
    setCities(newCities)
    try {
      await AsyncStorage.setItem('@cities', JSON.stringify(newCities))
    } catch (error) {
      throw new Error('Error saving city')
    }
  }

  const favoriteCity = async (city: City): Promise<void> => {
    const oldCities = await getCities()
    const newCities = oldCities.map((c) => {
      if (c.name === city.name) {
        c.favorite = !c.favorite
      }
      return c
    })
    setCities(newCities)
    try {
      await AsyncStorage.setItem('@cities', JSON.stringify(newCities))
    } catch (error) {
      throw new Error('Error saving city')
    }
  }

  const cleanMemory = async () => {
    try {
      await AsyncStorage.setItem('@cities', JSON.stringify([]))
    } catch (error) {
      throw new Error('Error saving city')
    }
  }

  return {
    getCities,
    removeCity,
    saveCity,
    favoriteCity,
    cities,
    loadingStorage,
  }
}
