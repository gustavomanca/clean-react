import React from 'react'

import { Spinner } from '@/presentation/components'
import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrapper}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Error</span>
    </div>
  )
}

export default FormStatus