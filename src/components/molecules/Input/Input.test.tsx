import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Input from "./Input"
import { Validate } from "./InputProps"

describe('Input', () => {
  it('should be in the document', () => {
    render(<Input />)
    expect(screen.queryByLabelText('textbox')).toBeInTheDocument()
  })
  
  it('should be empty', () => {
    render(<Input />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement
    expect(sut.value).toBe('')
  })
  
  it('should show the default value', () => {
    render(<Input defaultValue={5} />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement
    expect(sut.value).toBe('5')
  })
  
  it('should show the typed value', () => {
    render(<Input />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement

    fireEvent.change(sut, {
      target: {
        value: 'testing'
      }
    })

    expect(sut.value).toBe('testing')
  })
  
  it('should show the error message', () => {
    const errorMessage = 'Error message'
    const validateFunction: Validate = (_field: string, value: string | number) => {
      if (value === 'testing') {
        return {
          error: true,
          message: errorMessage
        }
      }
    }

    render(<Input validate={validateFunction} />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement

    fireEvent.change(sut, {
      target: {
        value: 'testing'
      }
    })

    expect(screen.queryByRole('alert')?.textContent).toBe(errorMessage)
  })
})
