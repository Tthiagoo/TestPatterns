/* eslint-disable react/react-in-jsx-scope */
import Switch from 'react-switch'
import { shade } from 'polished'
import { useThemeContext } from '../contexts/ThemeContext'
export const SwitchTheme: React.FC = () => {
  const { toggleTheme, theme } = useThemeContext()
  return (
    <>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'second'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, '#ff78')}
        onColor={'#ff8900'}
      />
    </>
  )
}
