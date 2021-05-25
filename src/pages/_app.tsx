import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { AuthProvider } from '../contexts/AuthContext'
import { PostProvider } from '../contexts/PostContext'
import { CustomThemeProvider } from '../contexts/ThemeContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <PostProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </PostProvider>
      </AuthProvider>
    </CustomThemeProvider>
  )
}

export default MyApp
