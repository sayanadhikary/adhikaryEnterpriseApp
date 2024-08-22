import FormSubmit from "@/components/form-submit";
import { getProduct } from "@/lib/sqldatabase";
import { getAllBrands, getAllCategories } from "@/lib/sqldatabase";
import Image from "next/image";

export default async function EditProductPage({params}){

const productId = params.editProduct;
const productArr = await getProduct(productId);
const product = productArr[0];
const allCategories = await getAllCategories();
    const allBrands = await getAllBrands()

    return (
        <>
        <div className="mt-20 w-3/4 ml-72">
        <form>
          <label className="block" htmlFor="Product Name">Enter New Name</label>
          <div className="flex">
            <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900 text-gray-700" type="text" id="productName" name="productName" placeholder={product.name} required />
            <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
            </div>
        </form>
        <form>
         <label className="block" htmlFor="Product Category">Choose Another Category</label>
         <div className="flex">
         <select className="w-2/4 me-2 p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="category" name="category">
                <option>{product.category}</option>
                    {allCategories.map(category=><option key={category.id}>{category.category_name}</option>)}                
         </select>
         <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
         </div>
        </form>
        <form>
        <label className="block" htmlFor="Product Brand">Choose Another Brand</label>
        <div className="flex">
        <select className="w-2/4 me-2 p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="brand" name="brand" required >
                    <option>{product.brand}</option>
                    {allBrands.map(brand=><option key={brand.id}>{brand.brand_name}</option>)}
        </select>
        <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
        </div>
        </form>
        <form>
        <label className="block" htmlFor="Product Name">Update Price</label>
        <div className="flex">
        <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900 text-gray-700" type="text" id="productName" name="productName" placeholder={product.price} required />
         <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
         </div>
         </form>
        <form>
        <Image src={product.image} alt="ProductImage" width={20} height={20} />
        <div className="flex">
        <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
        <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
        </div>
        </form>
        </div>
        </>
    )
}