import { quickShopApi } from "@/api/quickTesloApi"
import type { ProductsResponse } from "@/interface/products.response"
import { products } from "@/mocks/prodcucts.mock";

export const getProductAction = async() => {
    const {data} = await quickShopApi.get<ProductsResponse>('/products');

    const productWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map((image) => `${import.meta.env.VITE_API_URL}/files/product/${image}` ),
    }));

    return {
        ...data,
        products: productWithImageUrls
    }
}