'use server'

import { revalidatePath } from "next/cache";
import { deleteFromProducts, storeBrand, storeCategory, storeProduct, updataProductCategory, updateProductBrand, updateProductName, updateProductPrice, updateProductImage, removeCategory, removeBrand, updateCategoryProducts, updateBrandProducts, updateCategoryName, updateCategoryImage, updateBrandName, updateBrandImage } from "@/lib/sqldatabase";
import { uploadImage, deleteImage } from "./cloudinary";
import { statusMessage } from "@/components/toast";

export async function createProduct(formData){

const name = formData.get('productName').toUpperCase();
const category = formData.get('category').toUpperCase();
const brand = formData.get('brand').toUpperCase();
const price = formData.get('price');
const image = formData.get('image');

let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}

await storeProduct({
  name, category, brand, price, image:imageUrl
})
statusMessage("Product cerated successfully")
revalidatePath('/', 'layout')
};

export async function createCategory(formdata){
  const categoryName = formdata.get('categoryName').toUpperCase()
  const image = formdata.get('image')

  let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
await storeCategory({
  categoryName, image:imageUrl
});
statusMessage("Category cerated successfully");
revalidatePath('/', 'layout');
}

export async function createBrand(formdata){
  const brandName = formdata.get('brandName').toUpperCase()
  const image = formdata.get('image')

  let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
await storeBrand({
  brandName, image:imageUrl
});
statusMessage("Brand cerated successfully");
revalidatePath('/', 'layout');
}

// export async function editProduct(productId) {
//   console.log(productId)
// }

export async function deleteProduct(productId, imageUrl) {
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]  
  await deleteFromProducts(productId)
  const result = await deleteImage(imageName);  
  statusMessage("Product deleted permanently");
  revalidatePath('/', 'layout')
}

export async function deleteCategory(categoryName, imageUrl){
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]
  await updateCategoryProducts(categoryName, "General")
  await removeCategory(categoryName);
  await deleteImage(imageName);
  statusMessage("Category deleted. Products send to General.");
  revalidatePath('/', 'layout')
}

export async function deleteBrand(brandName, imageUrl){
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]
  await updateBrandProducts(brandName, "General")
  await removeBrand(brandName);
  await deleteImage(imageName);
  statusMessage("Brand deleted. Products send to General.");
  revalidatePath('/', 'layout')
}


// .............Edit Section started from here...................

export async function editName(productId, formData){
const productName = formData.get('productName')
await updateProductName(productId, productName);
statusMessage("Product name changed.");
revalidatePath('/', 'layout');
} 

export async function editCategory(productId, formData){  
const productCategory = formData.get('category')
await updataProductCategory(productId, productCategory);
statusMessage("Product category changed.");
revalidatePath('/', 'layout');
}

export async function editBrand(productId, formData){
const productBrand = formData.get('brand')
await updateProductBrand(productId, productBrand);
statusMessage("Product brand changed");
revalidatePath('/', 'layout');
}

export async function editPrice(productId, formData){
  const productPrice = formData.get('productPrice')
  await updateProductPrice(productId, productPrice);
  statusMessage("Product price changed.");
  revalidatePath('/', 'layout')
}

export async function editImage(productid, imageUrl, formData){
  const image = formData.get('image')
  let newImageUrl
  try{
      newImageUrl = await uploadImage(image)
  }catch (error){
      throw new Error('Image upload failed. Try again')
  }
  await updateProductImage(productid, newImageUrl)
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]
  const result = await deleteImage(imageName);
  statusMessage("Product image changed")
  revalidatePath('/', 'layout') 
}

export async function editCategoryName(categoryId, categoryName, formData){
  const newCategoryName = formData.get('categoryName').toUpperCase();
  await updateCategoryName(categoryId, newCategoryName);
  await updateCategoryProducts(categoryName, newCategoryName);
  statusMessage("Category Updated.")
  revalidatePath('/', 'layout')
}
export async function editCategoryImage(categoryId, imageUrl, formData){
  const image = formData.get('image')
  let newImageUrl
  try{
      newImageUrl = await uploadImage(image)
  }catch (error){
      throw new Error('Image upload failed. Try again')
  }
  await updateCategoryImage(categoryId, newImageUrl)
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]
  await deleteImage(imageName);
  statusMessage("Category image changed.")
  revalidatePath('/', 'layout') 
}

export async function editBrandName(brandId, brandName, formData){
  const newBrandName = formData.get('brandName').toUpperCase();
  await updateBrandName(brandId, newBrandName);
  await updateBrandProducts(brandName, newBrandName);
  statusMessage("Brand updated.");
  revalidatePath('/', 'layout')
}
export async function editBrandImage(brandId, imageUrl, formData){
  const image = formData.get('image')
  let newImageUrl
  try{
      newImageUrl = await uploadImage(image)
  }catch (error){
      throw new Error('Image upload failed. Try again')
  }
  await updateBrandImage(brandId, newImageUrl)
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]
  await deleteImage(imageName);
  statusMessage("Brand logo changed")
  revalidatePath('/', 'layout') 
}