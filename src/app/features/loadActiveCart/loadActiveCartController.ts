import customCartGateway from "@/app/layers/cartGateway";
import httpClient from "@/config/httpClient";
import { useAuth } from "@/contexts/AuthContext";
import useRequest from "@/hooks/useRequest";
import loadActiveCartUseCase from "./loadActiveCartUseCase";

export default function useLoadActiveCart() {
  const cartGateway = customCartGateway(httpClient)
  const loadActiveCart = loadActiveCartUseCase(cartGateway)
  
  const { guestId } = useAuth()
  const { data, isLoading, error } = useRequest(loadActiveCart, { accountId: null, guestId })

  return {
    error,
    isLoading,
    data
  }
}
