import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import ProductCard from "./ProductCard"
import { product } from "./ProductCard.mock"

describe('ProductCard', () => {
  it('should be in the document', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByLabelText(product.name)).toBeInTheDocument()
  })
  
  it('should have an image', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByRole('img')).toBeInTheDocument()
  })
  
  it('should have a title', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByRole('heading')).toBeInTheDocument()
  })
  
  it('should have a description', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByLabelText('Product description')).toBeInTheDocument()
  })
  
  it('should have a quantity control', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByLabelText('minus')).toBeInTheDocument()
    expect(screen.queryByLabelText('plus')).toBeInTheDocument()
    expect(screen.queryByLabelText('quantity box')).toBeInTheDocument()
  })
  
  it('should have a call-to-action', () => {
    render(<ProductCard {...product} />, { wrapper: BrowserRouter })
    expect(screen.queryByLabelText('add')).toBeInTheDocument()
  })
})
