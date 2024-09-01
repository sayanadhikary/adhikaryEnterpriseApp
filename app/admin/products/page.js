import Button from "@/components/button"
import { getAllProducts } from "@/lib/sqldatabase"
import { deleteProduct } from "@/lib/actions"
import Link from "next/link"

export default async function AllProductsPage(){

    const allProducts = await getAllProducts()

    return (
        <>          

<div className="relative mt-24 ms-64">
    <Link href="/admin/products/addProduct"><Button buttonText={"Add New Product"} /></Link>
    <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>                
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Brand
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {allProducts.map(product=>(
                 <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                 <td className="px-6 py-4">
                         {product.id}
                     </td>
                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {product.name}
                     </th>
                     <td className="px-6 py-4 text-nowrap">
                         {product.category}
                     </td>
                     <td className="px-6 py-4 text-nowrap">
                         {product.brand}
                     </td>
                     <td className="px-6 py-4">
                     ₹{product.price}
                     </td>
                     <td className="px-6 py-4 flex">
                      <Link href={`/admin/products/${product.id}`}><button className="bg-blue-500 mx-1 p-1 rounded-md">✏️</button></Link>
                        <form action={deleteProduct.bind(null, product.id, product.image)}><button className="bg-red-700 mx-1 p-1 rounded-md" >🗑️</button></form>                    
                     
                     </td>
                 </tr>
            ))}
           
            
        </tbody>
    </table>
</div>

        </>
    )
}