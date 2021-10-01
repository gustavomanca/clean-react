import React, { useState } from 'react'
import Styles from './styles.scss'

import { FormStatus, Footer, Header, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form'

const Login: React.FC = () => {
  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })
  const [state] = useState({
    isLoading: false
  })

  return (
    <div className={Styles.login}>
      <Header />

      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input
            type="email"
            name="email"
            placeholder="Type your email..."
          />

          <Input
            type="password"
            name="password"
            placeholder="Type your password..."
          />

          <button data-testid="submit" className={Styles.submit} type="submit" disabled>
          Sign in
          </button>
          <span className={Styles.link}>Create an account</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default Login
