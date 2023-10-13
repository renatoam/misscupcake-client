import customCartGateway from "@/app/layers/cartGateway";
import httpClient from "@/config/httpClient";
import { useAuth } from "@/contexts/AuthContext";
import useRequest from "@/hooks/useRequest";
import loadActiveCartUseCase from "./loadActiveCartUseCase";
import { LoadActiveCartDTO } from "./loadActiveCartDTO";

export default function useLoadActiveCart() {
  const cartGateway = customCartGateway(httpClient)
  const loadActiveCart = loadActiveCartUseCase(cartGateway)
  
  const { customerId } = useAuth()
  const { data, isLoading, error } = useRequest<
    typeof loadActiveCart, LoadActiveCartDTO
  >(loadActiveCart, { customerId })

  return {
    error,
    isLoading,
    data
  }
}
