import { fireEvent, render, screen, within } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from "vitest"
import QuantityControl from "./QuantityControl"

describe('QuantityControl', () => {
  const user = userEvent.setup()

  it('should be in the document', () => {
    render(<QuantityControl />)
    expect(screen.queryByLabelText('quantity control')).toBeInTheDocument()
  })
  
  it('should have the proper composition', () => {
    render(<QuantityControl />)
    const sut = screen.queryByLabelText('quantity control')
    expect(within(sut!).queryByLabelText('minus'))
    expect(within(sut!).queryByLabelText('plus'))
    expect(within(sut!).queryByLabelText('quantity'))
  })
  
  it('should decrease quantity', async () => {
    render(<QuantityControl inputProps={{ value: 10 }} />)
    const sut = screen.queryByLabelText('minus')
    const input = screen.queryByLabelText('quantity box') as HTMLInputElement
    await user.click(sut!)
    expect(Number(input.value)).toBe(9)
  })
  
  it('should increase quantity', async () => {
    render(<QuantityControl inputProps={{ value: 10 }} />)
    const sut = screen.queryByLabelText('plus')
    const input = screen.queryByLabelText('quantity box') as HTMLInputElement
    await user.click(sut!)
    expect(Number(input.value)).toBe(11)
  })
  
  it('should allow typing the quantity', async () => {
    render(<QuantityControl />)
    const input = screen.queryByLabelText('quantity box') as HTMLInputElement
    
    fireEvent.change(input, {
      target: {
        value: '10'
      }
    })

    expect(Number(input.value)).toBe(10)
  })
})
