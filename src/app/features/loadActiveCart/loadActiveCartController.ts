import customCartGateway from "@/app/layers/cartGateway";
import httpClient from "@/config/httpClient";
import useRequest from "@/hooks/useRequest";
import loadActiveCartUseCase from "./loadActiveCartUseCase";
import { LoadActiveCartDTO } from "./loadActiveCartDTO";
import { getAccount } from "@/states/account";

export default function useLoadActiveCart() {
  const cartGateway = customCartGateway(httpClient)
  const loadActiveCart = loadActiveCartUseCase(cartGateway)
  
  const { id } = getAccount()
  const { data, isLoading, error } = useRequest<
    typeof loadActiveCart, LoadActiveCartDTO
  >(loadActiveCart, { customerId: id })

  return {
    error,
    isLoading,
    data
  }
}
