import React, { useContext } from 'react'

import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid="error-wrapper" className={Styles.errorWrapper}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { errorMessage && <span className={Styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
