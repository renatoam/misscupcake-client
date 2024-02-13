import { SimpleCartProps } from "../domain/entities/cart.entity"
import { UseCase } from "../domain/ports/useCase.port"
import { CartDTO } from "./cart.dto"
import { CartProtocols } from "./cart.protocols"

export namespace CartUseCase {
  export type LoadActive = UseCase<
    CartDTO.LoadActiveCart,
    CartProtocols.LoadActiveResponse<SimpleCartProps>
  >
}
