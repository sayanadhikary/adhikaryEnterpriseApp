import FormSubmit from "@/components/form-submit";
import { getProduct } from "@/lib/sqldatabase";
import Image from "next/image";

export default function EditProductPage({params}){

const productId = params.editProduct;
const product = getProduct(productId)

    return (
        <>
        <div className="mt-16 w-3/4 ml-72">
        <form>
          <label className="flex" htmlFor="Product Name">{product.name}</label>
            <input className="w-full text-slate-700 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" placeholder={product.name} required />
            <FormSubmit btnText={"Update"} />
        </form>
        <form>
         <label className="block" htmlFor="Product Name">{product.category}</label>
         <input className="w-full text-slate-700 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
         <FormSubmit btnText={"Update"} />
        </form>
        <form>
        <label className="block" htmlFor="Product Name">{product.brand}</label>
        <input className="w-full text-slate-700 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
        <FormSubmit btnText={"Update"} />
        </form>
        <form>
        <label className="block" htmlFor="Product Name">{product.price}</label>
        <input className="w-full text-slate-700 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
         <FormSubmit btnText={"Update"} />
         </form>
        <form>
        <Image src={product.Image} alt="ProductImage" width={20} height={20} />
        <input className="w-full text-slate-700 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
        <FormSubmit btnText={"Update"} />
        </form>
        </div>
        </>
    )
}