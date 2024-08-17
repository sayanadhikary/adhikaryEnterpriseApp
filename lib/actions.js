'use server'

import { revalidatePath } from "next/cache";
import { deleteFromProducts, storeBrand, storeCategory, storeProduct } from "@/lib/sqldatabase";
import { uploadImage } from "./cloudinary";

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
})
revalidatePath('/', 'layout')
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
})
revalidatePath('/', 'layout')
}

export async function editProduct(productId) {
  console.log(productId)
}

export async function deleteProduct(productId) {
  await deleteFromProducts(productId)
  revalidatePath('/', 'layout')
}


// .............Edit Section started from here...................