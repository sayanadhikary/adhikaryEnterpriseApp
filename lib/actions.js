'use server'

import { revalidatePath } from "next/cache";
import { deleteFromProducts, storeBrand, storeCategory, storeProduct, updataProductCategory, updateProductBrand, updateProductName, updateProductPrice, updateProductImage, removeCategory, removeBrand, updateCategoryProducts, updateBrandProducts, updateCategoryName, updateCategoryImage, updateBrandName, updateBrandImage, removeUser, storeOrder, updateOrderStatus } from "@/lib/sqldatabase";
import { uploadImage, deleteImage } from "./cloudinary";
import { statusMessage } from "@/components/toast";
import { redirect } from "next/navigation";

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

export async function deleteUser(id){
  await removeUser(id)
  statusMessage("User deleted successfully.")
  revalidatePath('/admin/users')
}

export async function placeOrder(userId, orderDetails, status){
 const result = await storeOrder(userId, orderDetails, status);
 const orderId = result[0].id;
 revalidatePath('/admin');
 redirect(`/checkout/${orderId}`);
}
export async function updateStatus(orderId, formData){
  const statusMessage = formData.get('orderStatus')
  const d = new Date();
  const DateTime = d.getDate()+'-'+["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()]+'-'+d.getFullYear()+' at '+d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const status = statusMessage + '@' + DateTime;
  await updateOrderStatus(orderId, status)
  revalidatePath("/admin");
  revalidatePath("/user/[allorders]", 'layout')
  redirect("/admin")
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