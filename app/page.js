import Image from "next/image";
import CardHalf from "@/components/card-half";
import Link from "next/link";
import { getAllProducts } from "@/lib/sqldatabase";

export default async function Home() { 
  
  const products = await getAllProducts()

  if (!products){
    return <h1 className="flex flex-wrap justify-evenly mt-12">No Product!</h1>
  }
  
  return (
    <> 
    <div className="flex flex-wrap justify-evenly mt-12"> 
      {products.map(product => (
        <Link key={product.id} href={`/${product.id}`}>
        <CardHalf  image={product.image} name={product.name} price={product.price} />
        </Link>
      )
        )}
     </div>  
    </>
  );
};
