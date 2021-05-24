export interface IThemeContextData {
  toggleTheme(): void
  theme: ITheme
}

export interface ITheme {
  name: string
  colors: {
    primary: string
    black: string
    background: string
    border: string
  }
}
