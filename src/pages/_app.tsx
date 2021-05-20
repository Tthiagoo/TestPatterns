import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { AuthProvider } from '../contexts/AuthContext'
import { PostProvider } from '../contexts/PostContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PostProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </PostProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
