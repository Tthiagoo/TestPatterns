import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { useAuth } from '../contexts/AuthContext'
import { SwitchTheme } from '../components/SwitchTheme'

const Home: React.FC = () => {
  const { user, login, logout } = useAuth()
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Hello Context</h1>
      <h2>User: {user ? 'login' : 'logout'}</h2>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <SwitchTheme />
      </div>
    </Container>
  )
}

export default Home
