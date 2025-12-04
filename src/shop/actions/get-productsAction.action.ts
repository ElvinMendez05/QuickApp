import { quickShopApi } from "@/api/quickTesloApi"
import type { ProductsResponse } from "@/interface/products.response"

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number;
    maxPrice?: number;
    query?: string;
}

export const getProductAction = async(
    options: Options
):Promise<ProductsResponse> => {
    const {limit, offset, sizes, gender, minPrice, maxPrice, query} = options;
    
    const {data} = await quickShopApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            sizes,
            gender,
            minPrice,
            maxPrice,
            q: query,
        }
    });

    const productWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map((image) => `${import.meta.env.VITE_API_URL}/files/product/${image}` ),
    }));

    return {
        ...data,
        products: productWithImageUrls
    }
}