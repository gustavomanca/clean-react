import React from 'react'
import { render } from '@testing-library/react'
import Login from '.'

describe('Login Component', () => {
  test('should not render spinner and error message initially', () => {
    const { getByTestId } = render(<Login />)
    const errorWrapper = getByTestId('error-wrapper')
    expect(errorWrapper.childElementCount).toBe(0)
  })
})
