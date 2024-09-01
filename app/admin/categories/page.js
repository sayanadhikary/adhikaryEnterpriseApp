import Link from "next/link";
import { getAllBrands, getAllCategories } from "@/lib/sqldatabase";
import { deleteCategory, deleteBrand } from "@/lib/actions";

export default async function CategoryPage(){

    const allCategories = await getAllCategories();
    const allBrands = await getAllBrands()

    return (
        <>
        <div className="mt-24 ms-72 flex justify-evenly">           

<div className="relative overflow-x-auto">    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Category name
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>               
            </tr>
        </thead>
        <tbody>
            {allCategories.map(category=>(
                <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category.category_name}
                </th>
                <td className="px-6 py-4 flex">
                <Link href={`/admin/categories/${category.id}`}><button className="bg-blue-500 mx-1 p-1 rounded-md">✏️</button></Link>
                <form action={deleteCategory.bind(null, category.category_name, category.image)}><button className="bg-red-700 mx-1 p-1 rounded-md" >🗑️</button></form>
                </td>               
            </tr> 
            ))}
                     
        </tbody>
    </table>
</div>

<div className="relative overflow-x-auto">    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Brand name
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>               
            </tr>
        </thead>
        <tbody>
        {allBrands.map(brand=>(
                <tr key={brand.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {brand.brand_name}
                </th>
                <td className="px-6 py-4 flex">
                <Link href={`/admin/brands/${brand.id}`}><button className="bg-blue-500 mx-1 p-1 rounded-md">✏️</button></Link>
                <form action={deleteBrand.bind(null, brand.brand_name, brand.image)}><button className="bg-red-700 mx-1 p-1 rounded-md" >🗑️</button></form>
                </td>               
            </tr> 
            ))}
        </tbody>
    </table>
</div>

        </div>
        </>
    )
}