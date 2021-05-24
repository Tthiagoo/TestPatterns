import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { Firsttheme } from '../styles/theme'
import { AuthProvider } from '../contexts/AuthContext'
import { PostProvider } from '../contexts/PostContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Firsttheme}>
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
