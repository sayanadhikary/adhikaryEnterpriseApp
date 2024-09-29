import Image from "next/image";
import { getProduct } from "@/lib/sqldatabase";
import AddToCart from "@/components/cart/add-to-cart-button";
import { ProductQtyInp } from "@/components/cart/product-qty";

export default async function ProductDetails({params}){
    const productid = params.product;
    const productData = await getProduct(productid);   
    const productDetails = productData[0];   

    return (
         <>
    <div className="m-4 my-16 pt-4">
    <Image className="object-contain h-96 w-full" src={productDetails.image} alt={productDetails.name} width={500} height={500} />
    <div className="my-4 mx-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productDetails.name}</h5>
        <h2 className="my-2 text-lg font-semibold text-gray-900 dark:text-white">Details</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Category : {productDetails.category}</li>
                <li>Brand : {productDetails.brand}</li>
            </ul>
        <p className="my-4 text-3xl font-bold text-gray-900 dark:text-white">₹{productDetails.price}</p>
    </div>   
    <ProductQtyInp productId={productDetails.id} /> 
    <AddToCart product={productDetails} />    
    </div>
    </>
    )
}