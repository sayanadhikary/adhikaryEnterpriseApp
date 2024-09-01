import { getCategory } from "@/lib/sqldatabase";
import { editCategoryImage, editCategoryName } from "@/lib/actions";
import FormSubmit from "@/components/form-submit";
import Image from "next/image";

export default async function EditCategoryPage({params}){

const categoryId = params.editCategory;
const categoryArr = await getCategory(categoryId);
const category = categoryArr[0];

    return (
        <>
            <div className="mt-20 w-3/4 ml-72">
        <div className="flex m-4 p-4">
        <Image src={category.image} alt="CategoryImage" width={100} height={100} />
        <h1 className="ms-6 my-auto">{category.category_name}</h1>
        </div>
        <form action={editCategoryName.bind(null, categoryId, category.category_name)}>
          <label className="block" htmlFor="Category Name">Enter New Name</label>
          <div className="flex">
            <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900 text-gray-700" type="text" id="categoryName" name="categoryName" placeholder={category.category_name} required />
            <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
            </div>
        </form>   
       
       
        <form action={editCategoryImage.bind(null, categoryId, category.image)}>
        <label className="block" htmlFor="Category Image">Update Image</label>          
        <div className="flex">
        <input className="w-2/4 me-2 p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" id="image" name="image" required />
        <div className="my-auto mx-2"><FormSubmit btnText={"Update"} /></div>
        </div>
        </form>
        </div>
        </>
    )
}