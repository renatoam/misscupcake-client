import useLoadActiveController from "@/app/cart/infrastructure/controller/loadActive.controller";
import loadActiveCartUseCase from "@/app/cart/application/loadActive.useCase";
import { AxiosHttpClient } from "@/app/shared/infrastructure/axiosHttpClient";
import { HttpClientResponse } from "@/app/shared/interface/HttpClient";
import { PropsWithChildren, createContext, useContext } from "react";
import { cartGateway } from "../infrastructure/gateway/cart.gateway";
import { SimpleCartProps } from "../domain/entities/Cart";
import { CartDTO } from "../interface/CartDTO";

export interface ActiveCartData {
  error: unknown;
  isLoading: boolean;
  data: HttpClientResponse<SimpleCartProps> | undefined;
}

export const CartContainer = createContext<ActiveCartData>({
  error: undefined,
  isLoading: false,
  data: undefined
})

export const useActiveCart = () => useContext(CartContainer)

export const CartContainerProvider = (props: PropsWithChildren<CartDTO.LoadActiveCart>) => {
  const { customerId } = props
  const httpClient = new AxiosHttpClient()
  const gateway = cartGateway(httpClient)
  const loadActiveUseCase = loadActiveCartUseCase(gateway)
  const loadActiveController = useLoadActiveController(loadActiveUseCase)
  const activeCartData = loadActiveController({ customerId })

  return (
    <CartContainer.Provider value={activeCartData}>
      {props.children}
    </CartContainer.Provider>
  )
}
