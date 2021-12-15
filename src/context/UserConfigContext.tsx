import React, { createContext, ReactNode } from 'react'
import { UserConfigExportsType, useUserConfig } from './hooks/useUserConfig'

const UserConfigContext = createContext<UserConfigExportsType | undefined>(
  undefined,
)

const UserConfigProvider: React.FC<ReactNode> = ({ children }) => {
  const { changeUnitSystem, getUnitSystem, unitSystem } = useUserConfig()
  return (
    <UserConfigContext.Provider
      value={{ changeUnitSystem, getUnitSystem, unitSystem }}
    >
      {children}
    </UserConfigContext.Provider>
  )
}

export { UserConfigContext, UserConfigProvider }
