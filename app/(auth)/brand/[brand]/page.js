import Link from "next/link";
import CardTwo from "@/components/card-two";
import { getBrandedProducts } from "@/lib/sqldatabase";

export default async function BrandedProductPage({params}){

const brandName = decodeURI(params.brand);
const products = await getBrandedProducts(brandName);

    return (
        <>
         <div className="flex flex-wrap justify-evenly mt-16"> 
         {products.map(product => (
        <Link key={product.id} href={`/allproducts/${product.id}`}>
        <CardTwo  image={product.image} name={product.name} price={product.price} />
        </Link>
      )
        )}
     </div>
        </>
    )
}