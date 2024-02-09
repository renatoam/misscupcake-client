import { HttpClient } from "@/app/shared/interface/HttpClient";
import { createCartGateway, deleteCartGateway, loadActiveCartGateway, updateCartGateway } from "./implementations";
import { loadCartGateway } from "./implementations/loadCartGateway";
import { CartGateway } from "../../interface/CartGateway";

export const cartGateway = (httpClient: HttpClient): CartGateway => {
  return {
    load: loadCartGateway(httpClient),
    update: updateCartGateway(httpClient),
    create: createCartGateway(httpClient),
    delete: deleteCartGateway(httpClient),
    loadActive: loadActiveCartGateway(httpClient),
  }
}
