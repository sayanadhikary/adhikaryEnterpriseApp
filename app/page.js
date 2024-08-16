
import Link from "next/link";
import Image from "next/image";
import { getAllBrands, getAllCategories } from "@/lib/sqldatabase";
import CardThree from "@/components/card-three";
import CardFour from "@/components/card-four";

export default async function Home() { 
  
  const brands = await getAllBrands(); 
  const categories = await getAllCategories();
  
  return (
    <> 
    <div className="mt-16 p-4">
    <Link href={"/allproducts"}><Image className="rounded-lg mx-auto" src={"https://res.cloudinary.com/dluc4by6e/image/upload/v1723735806/AdhikaryEnterprise/vt5egom8x1woldic0gba.png"} alt="All Products" width={1200} height={360} />
    </Link>
    </div>
    <div className="flex flex-wrap justify-evenly mt-1"> 
      {brands.map(brand => (
        <Link key={brand.id} href={`/brand/${brand.brand_name}`}>
        <CardFour image={brand.image} name={brand.brand_name} />
        </Link>
      )
        )}
     </div>  

     <div className="flex flex-wrap justify-evenly mt-2"> 
      {categories.map(category => (
        <Link key={category.id} href={`/category/${category.category_name}`}>
        <CardThree image={category.image} name={category.category_name} />
        </Link>
      )
        )}
     </div> 
    </>
  );
};
