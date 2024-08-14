'use server'

import { revalidatePath } from "next/cache";
import { deleteFromProducts, storeBrand, storeCategory, storeProduct } from "@/lib/sqldatabase";
import { uploadImage } from "./cloudinary";

export async function createProduct(formData){

const name = formData.get('productName');
const category = formData.get('category');
const brand = formData.get('brand');
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
revalidatePath('/admin/products')
};

export async function createCategory(formdata){
  const categoryName = formdata.get('categoryName')
  const image = formdata.get('image')

  let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
await storeCategory({
  categoryName, image:imageUrl
})
revalidatePath('/admin/products/addProduct')
}

export async function createBrand(formdata){
  const brandName = formdata.get('brandName')
  const image = formdata.get('image')

  let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
await storeBrand({
  brandName, image:imageUrl
})
revalidatePath('/admin/products/addProduct')
}

export async function editProduct(productId) {
  console.log(productId)
}

export async function deleteProduct(productId) {
  await deleteFromProducts(productId)
  revalidatePath('/admin/products')
}