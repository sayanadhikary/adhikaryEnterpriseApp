import { getSearchedProducts } from "@/lib/sqldatabase";
import Link from "next/link";
import CardTwo from "@/components/card-two";

export default async function SearchedProductPage({params}){

const searchedParams = decodeURI(params.searchProduct).toUpperCase();
console.log(searchedParams)
const searchedInput = '%'+searchedParams+'%'
const products = await getSearchedProducts(searchedInput);

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