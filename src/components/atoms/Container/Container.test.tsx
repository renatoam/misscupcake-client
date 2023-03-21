import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Container from "./Container";

describe('Container', () => {
  it('should be rendered properly', () => {
    const content = "Child content"
    render(<Container children={content} />)

    expect(screen.getByText(content).textContent).toBe(content)
  })
  
  it('should be a section tag under the hood', () => {
    const content = "Child content"
    render(<Container children={content} />)
    const tagName = screen.getByText(content).tagName.toLowerCase()
    expect(tagName).toBe('section')
  })
})