import Image from "next/image";
import { getProduct } from "@/lib/sqldatabase";

export default async function ProductDetails({params}){
    const productid = params.product
    const productData = await getProduct(productid)   
    const productDetails = productData[0]

    return (
         <>
    <div className="m-4 mt-16">
    <Image className="mx-auto" src={productDetails.image} alt={productDetails.name} width={500} height={500} />
    <div className="my-6 mx-2">
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">Name:</span> <span>{productDetails.name}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">Price:</span> <span>{productDetails.price}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">Brand:</span> <span>{productDetails.brand}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">Category:</span> <span>{productDetails.category}</span></p>
    </div>
    </div>
    </>
    )
}