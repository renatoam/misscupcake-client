import { HttpClient } from "@/app/shared/interface/HttpClient";
import { createCartGateway, deleteCartGateway, loadActiveCartGateway, loadCartGateway, updateCartGateway } from "./implementations";
import { CartGateway } from "../../interface/cartGateway.port";

export const cartGateway = (httpClient: HttpClient): CartGateway => {
  return {
    load: loadCartGateway(httpClient),
    update: updateCartGateway(httpClient),
    create: createCartGateway(httpClient),
    delete: deleteCartGateway(httpClient),
    loadActive: loadActiveCartGateway(httpClient),
    createLocal: () => {
      throw new Error('Method not implemented.')
    }
  }
}
