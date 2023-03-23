import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import Button from "./Button"

describe('Button', () => {
  const user = userEvent.setup()

  it('should be in the document', () => {
    render(<Button />)
    expect(screen.queryByRole('button')).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const mockFunction = vi.fn()
    render(<Button onClick={mockFunction} />)

    await user.click(screen.queryByRole('button')!)
    
    expect(mockFunction).toHaveBeenCalled()
  })
})
