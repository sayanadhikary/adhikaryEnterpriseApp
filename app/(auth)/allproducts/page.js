import Link from "next/link";
import { getAllProducts } from "@/lib/sqldatabase";
import CardTwo from "@/components/card-two";

export default async function AllProductsPage() { 
  
  const products = await getAllProducts()

  if (!products){
    return <h1 className="flex flex-wrap justify-evenly mt-16">No Product!</h1>
  }
  
  return (
    <> 
    <div className="flex flex-wrap justify-evenly mt-16 pt-2"> 
      {products.map(product => (
        <Link key={product.id} href={`/allproducts/${product.id}`}>
        <CardTwo  image={product.image} name={product.name} price={product.price} />
        </Link>
      )
        )}
     </div>  
    </>
  );
};