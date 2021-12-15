import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type UserConfigExportsType = {
  unitSystem: string
  changeUnitSystem: (unitSys: string) => void
  getUnitSystem: () => Promise<string>
}

export const useUserConfig = (): UserConfigExportsType => {
  const [unitSystem, setUnitSystem] = React.useState('metric')

  useEffect(() => {
    getUnitSystem()
  }, [])

  const changeUnitSystem = async (unitSys: string): Promise<void> => {
    await AsyncStorage.setItem('@unitSystem', unitSys)
    setUnitSystem(unitSys)
  }

  const getUnitSystem = async (): Promise<string> => {
    const unitSys = await AsyncStorage.getItem('@unitSystem')
    if (unitSys) {
      setUnitSystem(unitSys)
    }
    return unitSys
  }

  return {
    unitSystem,
    changeUnitSystem,
    getUnitSystem,
  }
}
