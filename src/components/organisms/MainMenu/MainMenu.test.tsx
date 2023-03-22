import { act, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import { describe, it } from "vitest"
import MainMenu from "./MainMenu"

describe('MainMenu', () => {
  it('should open by clicking in the menu trigger in mobile resolution', async () => {
    const user = userEvent.setup()

    act(() => {
      window.innerWidth = 199
      fireEvent(window, new Event('resize'))
    })

    render(<MainMenu />, { wrapper: BrowserRouter })
    await user.click(screen.queryByText('menu')!)
    
    expect(screen.queryByRole('menu')).toBeInTheDocument()
  })
  
  it('should not be visible in mobile resolution if not clicking in the menu trigger', async () => {
    act(() => {
      window.innerWidth = 199
      fireEvent(window, new Event('resize'))
    })

    render(<MainMenu />, { wrapper: BrowserRouter })
    
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })
  
  it('should have multiple navigation options', async () => {
    render(<MainMenu />, { wrapper: BrowserRouter })
    
    const navLinks = screen.queryByRole('navigation')?.firstElementChild?.childNodes.length
    expect(navLinks).toBeGreaterThanOrEqual(1)
  })
})
