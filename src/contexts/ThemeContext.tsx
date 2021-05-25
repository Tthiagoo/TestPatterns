/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode
} from 'react'
import { ITheme, IThemeContextData } from '../DTOs/ThemeDto'
import { CustomFirstTheme, secondTheme } from '../styles/theme'

type Props = {
  children: ReactNode
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export function useThemeContext(): IThemeContextData {
  return useContext(ThemeContext)
}

export const CustomThemeProvider: React.FC = ({
  children
}: Props): JSX.Element => {
  const [theme, setTheme] = useState<ITheme>(CustomFirstTheme)

  const toggleTheme = useCallback(() => {
    if (theme.title === 'first') {
      setTheme(secondTheme)
    } else if (theme.title === 'second') {
      setTheme(CustomFirstTheme)
    }
  }, [theme])

  const value = {
    toggleTheme,
    theme
  }
  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  )
}
