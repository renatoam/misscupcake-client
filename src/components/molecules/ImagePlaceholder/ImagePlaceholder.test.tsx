import { render, screen } from "@testing-library/react"
import { describe, it } from "vitest"
import ImagePlaceholder from "./ImagePlaceholder"

describe('ImagePlaceholder', () => {
  it('should be in the document', () => {
    render(<ImagePlaceholder imageStatus="loading" />)
    expect(screen.queryByLabelText('placeholder')).toBeInTheDocument()
  })
})
