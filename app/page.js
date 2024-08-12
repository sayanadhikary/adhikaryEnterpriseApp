import Image from "next/image";
import CardHalf from "@/components/card-half";
import Link from "next/link";
import { getAllProducts } from "@/lib/sqldatabase";

export default function Home() { 
  
  const products = getAllProducts()
  
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
