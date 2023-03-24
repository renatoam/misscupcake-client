import { Source } from "./ImageProps"

export const mockImage = 'image-test.jpg'
export const blur = 'f_auto'
export const setSize = '1200w'
export const condition = '(min-width: 600px)'
export const size = '1200px'
export const type = 'jpeg'
export const sources: Source[] = [{
  srcSets: [{ src: mockImage, size: setSize }],
  srcSetSizes: [{ condition, size }],
  type
}]
