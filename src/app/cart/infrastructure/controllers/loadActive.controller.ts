import { UseCase } from "@/app/cart/domain/ports/useCase.port";
import { CartProtocols } from "@/app/cart/interface/cart.protocols";
import { useQuery } from "react-query";
import { SimpleCartProps } from "../../domain/entities/cart.entity";
import { CartDTO } from "../../interface/cart.dto";

export default function useLoadActiveController(
  useCase: UseCase<
    CartDTO.LoadActiveCart,
    CartProtocols.LoadActiveResponse<SimpleCartProps>
  >
) {  
  return ({ customerId }: CartDTO.LoadActiveCart) => {
    const { data: response, isLoading, error } = useQuery({
      queryKey: 'loadActive',
      queryFn: async () => useCase({ customerId })
    })

    return {
      error,
      isLoading,
      cart: response?.data
    }
  }
}
