import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Typography from './Typography'

describe('Typography', () => {
  it('should render the right text', () => {
    const content = "Content"
    render(<Typography element="h1" children={content} />)
    
    const text = screen.getByText(content)
    expect(text.innerHTML).toBe(content)
  })
  
  it('should render element with the right tag', () => {
    const content = "Content"
    render(<Typography element="h1" children={content} />)
    
    const text = screen.getByText(content)
    expect(text.tagName.toLowerCase()).toBe("h1")
  })
})
