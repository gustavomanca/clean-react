import React from 'react'
import Styles from './styles.scss'

import { Footer, Header, Spinner } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />

      <form action="" className={Styles.form}>
        <h2>Login</h2>

        <div className={Styles.inputWrapper}>
          <input type="email" name="email" placeholder="Type your email..." />
          <span className={Styles.status}>🔴</span>
        </div>

        <div className={Styles.inputWrapper}>
          <input
            type="password"
            name="password"
            placeholder="Type your password..."
          />
          <span className={Styles.status}>🔴</span>
        </div>

        <button className={Styles.submit} type="submit">
          Sign in
        </button>
        <span className={Styles.link}>Create an account</span>

        <div className={Styles.errorWrapper}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default Login
