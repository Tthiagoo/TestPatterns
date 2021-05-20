/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, ReactNode, useContext, useState } from 'react'

/* eslint-disable @typescript-eslint/no-empty-function */

type Props = {
  children: ReactNode
}

type authContextType = {
  user: boolean
  login: () => void
  logout: () => void
}
const authContextDefaultValues: authContextType = {
  user: null,
  login: () => {},
  logout: () => {}
}
const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(null)

  const login = () => {
    setUser(true)
  }

  const logout = () => {
    setUser(false)
  }

  const value = {
    user,
    login,
    logout
  }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
