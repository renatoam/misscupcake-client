import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ListItem from "./ListItem"

describe('List', () => {
  it('should be in the document', () => {
    render(<ListItem />)
    
    expect(screen.queryByRole('listitem')).toBeInTheDocument()
  })
  
  it('should contain the right children', () => {
    const children = 'content'
    render(<ListItem children={children} />)
    
    expect(screen.queryByRole('listitem')?.innerHTML).toBe(children)
  })
})

