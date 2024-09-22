import { getBrand } from "@/lib/sqldatabase";
import { editBrandImage, editBrandName } from "@/lib/actions";
import FormSubmit from "@/components/form-submit";
import Image from "next/image";

export default async function EditBrandPage({params}){

const brandId = params.editBrand;
const brandArr = await getBrand(brandId);
const brand = brandArr[0];

    return (
        <>
            <div className="mt-20 w-3/4 ml-72">
        <div className="flex m-4 p-4">
        <Image src={brand.image} alt="BrandImage" width={100} height={100} />
        <h1 className="ms-6 my-auto">{brand.brand_name}</h1>
        </div>
        <form action={editBrandName.bind(null, brandId, brand.brand_name)}>
          <label className="block" htmlFor="Brand Name">Enter New Name</label>
          <div className="flex">
            <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900 text-gray-700" type="text" id="brandName" name="brandName" placeholder={brand.brand_name} required />
            <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
            </div>
        </form>   
       
       
        <form action={editBrandImage.bind(null, brandId, brand.image)}>
        <label className="block" htmlFor="Bradn Image">Update Image</label>          
        <div className="flex">
        <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" id="image" name="image" required />
        <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
        </div>
        </form>
        </div>
        </>
    )
}