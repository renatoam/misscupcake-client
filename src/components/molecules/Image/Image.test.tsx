import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Image from "./Image";
import { blur, condition, mockImage, setSize, size, sources, type } from "./Image.mock";

describe('Image', () => {
  it('should be in the document', () => {
    render(<Image src={mockImage} alt="image" />)
    expect(screen.queryByAltText('image')).toBeInTheDocument()
  })
  
  it('should show the right image', () => {
    render(<Image alt="image" src={mockImage} />)
    const sut = screen.queryByAltText('image')
    expect(sut?.getAttribute('src')).toContain(mockImage)
  })
  
  it('should apply the blur options', () => {
    render(<Image alt="image" src={mockImage} type="jpeg" blurOptions={{ jpeg: blur }} />)
    const sut = screen.queryByAltText('image')
    expect(sut?.getAttribute('src')).toContain(blur)
  })
  
  it('should apply the proper art direction', () => {
    render(<Image src={mockImage} alt="image" sources={sources} />)
    const sut = screen.queryByLabelText('picture')?.firstElementChild
    
    expect(sut?.getAttribute('srcset')).toContain(mockImage)
    expect(sut?.getAttribute('srcset')).toContain(setSize)
    expect(sut?.getAttribute('sizes')).toContain(condition)
    expect(sut?.getAttribute('sizes')).toContain(size)
    expect(sut?.getAttribute('type')).toContain(type)
  })
})
