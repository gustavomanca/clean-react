import React, { useEffect, useState } from 'react'
import Styles from './styles.scss'

import { FormStatus, Footer, Header, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Campo obrigatório',
    password: '',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={Styles.login}>
      <Header />

      <Context.Provider value={{ state, setState }}>
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
