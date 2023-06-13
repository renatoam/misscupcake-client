import { LoadActiveCartDTO } from "../features/loadActiveCart/loadActiveCartDTO";
import { HttpClient, HttpClientError } from "./HttpClient";
import { CartGateway } from "./cartGateway.props";

export default function customCartGateway<T extends HttpClient>(httpClient: T): CartGateway {
  const loadActiveCart = async (loadActiveCartDTO: LoadActiveCartDTO): Promise<any> => {
    const { accountId, guestId } = loadActiveCartDTO
    
    try {
      const response = await httpClient.get(`/carts/active?accountId=${accountId}&guestId=${guestId}`)
      return response
    } catch (err) {
      const error = err as HttpClientError
      if (error.status === 404) {
        return {}
      }

      return {
        error: true,
        message: error.message || Error('[Gateway]: Error on getting active cart.')
      }
    }
  }

  return {
    loadCart: () => {},
    updateCart: () => {},
    deleteCart: () => {},
    deleteFromCart: () => {},
    loadActiveCart,
  }
}
