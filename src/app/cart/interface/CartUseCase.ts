import { SimpleCartProps } from "../domain/entities/Cart"
import { UseCase } from "../domain/ports/UseCase"
import { CartDTO } from "./CartDTO"
import { CartProtocols } from "./CartProtocols"

export namespace CartUseCase {
  export type LoadActive = UseCase<
    CartDTO.LoadActiveCart,
    CartProtocols.LoadActiveResponse<SimpleCartProps>
  >
}
