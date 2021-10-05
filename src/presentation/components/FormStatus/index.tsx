import React, { useContext } from 'react'

import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrapper" className={Styles.errorWrapper}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { mainError && <span className={Styles.error}>{ mainError }</span> }
    </div>
  )
}

export default FormStatus
