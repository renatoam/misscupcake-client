import loadActiveCartUseCase from "@/app/cart/application/loadActive.useCase";
import useLoadActiveController from "@/app/cart/infrastructure/controllers/loadActive.controller";
import { AxiosHttpClient } from "@/app/shared/infrastructure/axiosHttpClient";
import { PropsWithChildren, createContext, useContext } from "react";
import { SimpleCartProps } from "../domain/entities/cart.entity";
import { cartGateway } from "../infrastructure/gateways/cart.gateway";
import { CartDTO } from "../interface/cart.dto";

export interface ActiveCartData {
  error: unknown;
  isLoading: boolean;
  cart: SimpleCartProps | undefined;
}

export const CartContainer = createContext<ActiveCartData>({
  error: undefined,
  isLoading: false,
  cart: undefined
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
