import { DefaultTheme } from 'styled-components'
import usePersistedState from '../utils/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

const toggleTheme = () => {
  setTheme(theme.title === 'light' ? dark : light)
}
