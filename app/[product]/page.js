import Image from "next/image";
import { products } from "@/products";

export default function ProductDetails({params}){
    const productid = params.product
    const productData = products.find(prod => prod.id === productid)
    return <>
    <div className="m-4 mt-16">
    <Image className="mx-auto" src={`/prodimg/${productData.url}`} alt={productData.name} width={500} height={500} />
    <div className="my-6 mx-2">
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">name:</span> <span>{productData.name}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">price:</span> <span>{productData.price}</span></p>
        <p className="text-xs my-2 py-2"><span className="font-light text-gray-300">category:</span> <span>{productData.category}</span></p>
        <p className="text-xs my-2 py-2">{productData.description}</p>
        <p className="text-xs my-2 py-2">{productData.keywords}</p>
    </div>
    </div>
    </>
    
}