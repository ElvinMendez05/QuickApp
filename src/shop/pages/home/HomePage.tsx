import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/prodcucts.mock"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos" />
      
       <ProductsGrid products={products}/>

      <CustomPagination totalPage={7}/>
    </>
  )
}
