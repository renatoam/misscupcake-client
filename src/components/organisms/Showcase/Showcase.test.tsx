import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import Showcase from "./Showcase"
import { products } from "./Showcase.mock"

describe('Showcase', () => {
  it('should be in the document', () => {
    render(<Showcase products={products} />, { wrapper: BrowserRouter })
    expect(screen.queryByLabelText('Products showcase')).toBeInTheDocument()
  })
  
  it('should show as product as received', () => {
    render(<Showcase products={products} />, { wrapper: BrowserRouter })
    expect(screen.queryAllByRole('article').length).toBe(products.length)
  })
})
