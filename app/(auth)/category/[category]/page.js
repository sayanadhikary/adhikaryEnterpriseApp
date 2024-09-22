import Link from "next/link";
import CardTwo from "@/components/card-two";
import { getCategorisedProducts } from "@/lib/sqldatabase";

export default async function CategorisedProductPage({params}){

const categoryName = decodeURI(params.category);
const products = await getCategorisedProducts(categoryName)

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