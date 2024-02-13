import { HttpClientResponse } from "@/app/shared/interface/HttpClient"
import { Cart, SimpleCartProps } from "../domain/entities/cart.entity"

export namespace CartProtocols {
  export type LoadResponseData = SimpleCartProps
  export type LoadResponse = Promise<HttpClientResponse<LoadResponseData>>

  export type LoadActiveResponse<Response = Cart | undefined> = Promise<HttpClientResponse<Response>>

  export type UpdateResponseData = SimpleCartProps
  export type UpdateResponse = Promise<HttpClientResponse<UpdateResponseData>>

  export type CreateResponseData = SimpleCartProps
  export type CreateResponse = Promise<HttpClientResponse<CreateResponseData>>

  export type DeleteResponse = Promise<HttpClientResponse<void>>
}
