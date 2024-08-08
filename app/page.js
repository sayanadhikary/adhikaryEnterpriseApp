import Image from "next/image";
import { products } from "@/products";
import CardHalf from "@/components/card-half";
import Link from "next/link";

export default function Home() {  

  return (
    <> 
    <div className="flex flex-wrap justify-evenly mt-12"> 
      {products.map(product => (
        <Link key={product.id} href={`/${product.id}`}>
        <CardHalf  image={`/prodimg/${product.url}`} name={product.name} price={product.price} />
        </Link>
      )
        )}
     </div>  
    </>
  );
}
