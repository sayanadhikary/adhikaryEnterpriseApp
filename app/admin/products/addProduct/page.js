import FormSubmit from "@/components/form-submit";
import { createProduct, createCategory, createBrand } from "@/lib/actions";
import { getAllBrands, getAllCategories } from "@/lib/sqldatabase";

export default async function AddProductPage(){ 
    
    const allCategories = await getAllCategories();
    const allBrands = await getAllBrands()

    return (
         <>         
            <div className="flex mt-20"> 
            <div className="container flex-auto w-3/4 pl-96 pr-36">
            <h1 className="block text-center mb-4">Add Product</h1>
            <form action={createProduct}>
                
                <label className="block" htmlFor="Product Name">Product Name</label>
                <input className="w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="productName" name="productName" required />
                
                
                <label className="block" htmlFor="Category">Category</label>
                <select className="w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="category" name="category">
                <option>General</option>
                    {allCategories.map(category=><option key={category.id}>{category.category_name}</option>)}                  
                    
                </select>
                
            
                <label className="block" htmlFor="Brand">Brand</label>
                <select className="w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="brand" name="brand" required >
                    <option>General</option>
                    {allBrands.map(brand=><option key={brand.id}>{brand.brand_name}</option>)}
                </select>
            
                
                <label className="block" htmlFor="Price">Price</label>
                <input className="w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="number" step="0.01" id="price" name="price" required />
        
                
                <label className="block" htmlFor="Image">Upload Image</label>
                <input className="w-full file:p-1 file:bg-gradient-to-r from-cyan-500 to-blue-500 file:text-white p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" accept="image/png, image/jpeg, image/jpg" id="image" name="image" required />
                
                <FormSubmit btnText="Add Product" />
            </form>  
            </div>

            <div className="container flex-auto w-1/4 mt-16 px-16 text-xs">
                <div>
                <h1 className="block text-center mb-4">Add Category</h1>
                <form action={createCategory}>

                <label className="block w-full" htmlFor="category Name">Category Name</label>
                <input className="block w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="categoryName" name="categoryName" required />
                
                <label className="block w-full" htmlFor="Image">Upload Image</label>
                <input className="block w-full file:p-1 file:bg-gradient-to-r from-cyan-500 to-blue-500 file:text-white p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" accept="image/png, image/jpeg" id="image" name="image" required />                
                <FormSubmit btnText={"Add Category"} />              
                </form>
                </div>

                <div className="mt-12">
                <h1 className="block text-center mb-4">Add Brand</h1>
                <form action={createBrand}>

                <label className="block w-full" htmlFor="Brand Name">Brand Name</label>
                <input className="block w-full p-1 text-gray-700 rounded-md mt-2 mb-4 border border-slate-900" type="text" id="brandName" name="brandName" required />
                
                <label className="block w-full" htmlFor="Image">Upload Image</label>
                <input className="block w-full file:p-1 file:bg-gradient-to-r from-cyan-500 to-blue-500 file:text-white p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" accept="image/png, image/jpeg" id="image" name="image" required />                              
                <FormSubmit btnText={"Add Brand"} />
                </form>
                </div>
            </div>
            </div>
        </>
        
    )
}

