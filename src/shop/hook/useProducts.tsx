import { useQuery } from "@tanstack/react-query"
import { getProductAction } from "../actions/get-productsAction.action"

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductAction,
  })
}
