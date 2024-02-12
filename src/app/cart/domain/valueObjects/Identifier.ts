import { validate } from "uuid"

export default class Identifier {
  readonly value: string

  constructor(id?: string) {
    if (!id || !validate(id)) {
      throw new Error('ID invalid.')
    }
    
    this.value = id
  }
}
