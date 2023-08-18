import { LoadActiveCartDTO, SimpleCartResponseDTO } from "../features/loadActiveCart/loadActiveCartDTO";
import loadActiveCartGateway from "../features/loadActiveCart/loadActiveCartGateway";
import { HttpClient, HttpClientError } from "./HttpClient";
import { CartGateway } from "./cartGateway.props";

type HttpClientType = HttpClient<SimpleCartResponseDTO, HttpClientError>
type GatewayDTO = string | LoadActiveCartDTO
export type CustomCartGateway = CartGateway<GatewayDTO, SimpleCartResponseDTO | HttpClientError> 

export default function customCartGateway(
  httpClient: HttpClientType
): CartGateway<GatewayDTO, SimpleCartResponseDTO | HttpClientError> {
  return {
    loadCart: () => {},
    updateCart: () => {},
    deleteCart: () => {},
    deleteFromCart: () => {},
    loadActiveCart: loadActiveCartGateway(httpClient),
  }
}
