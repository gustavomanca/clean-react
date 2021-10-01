import React from 'react'
import Styles from './login-styles.scss'

import Spinner from '@/presentation/components/Spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="/images/logo.svg" alt="" />
        <h1>4Dev - Surveys for developers</h1>
      </header>
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
      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
