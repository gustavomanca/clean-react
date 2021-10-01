import React, { memo } from 'react'

import { Logo } from '@/presentation/components'
import Styles from './styles.scss'

const Header: React.FC = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Surveys for developers</h1>
  </header>
)

export default memo(Header)
