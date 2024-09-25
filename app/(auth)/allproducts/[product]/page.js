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
    <div className="m-4 my-20 pt-2">
    <Image className="mx-auto" src={productDetails.image} alt={productDetails.name} width={500} height={500} />
    <div className="my-6 mx-2">
        <p className="text-xs my-2 py-2"><span className="font-light text-green-500">Name: </span> <span>{productDetails.name}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-green-500">Price: </span> <span>₹ {productDetails.price}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-green-500">Brand: </span> <span>{productDetails.brand}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-green-500">Category: </span> <span>{productDetails.category}</span></p>
    </div>   
    <ProductQtyInp productId={productDetails.id} /> 
    <AddToCart product={productDetails} />
    </div>
    </>
    )
}