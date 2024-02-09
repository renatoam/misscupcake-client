import { UseCase } from "@/app/cart/domain/ports/UseCase";
import { CartProtocols } from "@/app/cart/interface/CartProtocols";
import { useQuery } from "react-query";
import { SimpleCartProps } from "../../domain/entities/Cart";
import { CartDTO } from "../../interface/CartDTO";

export default function useLoadActiveController(
  useCase: UseCase<
    CartDTO.LoadActiveCart,
    CartProtocols.LoadActiveResponse<SimpleCartProps>
  >
) {  
  return ({ customerId }: CartDTO.LoadActiveCart) => {
    const { data, isLoading, error } = useQuery({
      queryKey: 'loadActive',
      queryFn: async () => useCase({ customerId })
    })

    return {
      error,
      isLoading,
      data
    }
  }
}
