'use server'

import { revalidatePath } from "next/cache";
import { deleteFromProducts, storeBrand, storeCategory, storeProduct, updataProductCategory, updateProductBrand, updateProductName, updateProductPrice, updateProductImage } from "@/lib/sqldatabase";
import { uploadImage, deleteImage } from "./cloudinary";

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

export async function deleteProduct(productId, imageUrl) {
  const imageName = imageUrl.split('AdhikaryEnterprise/')[1].split('.')[0]  
  await deleteFromProducts(productId)
  const result = await deleteImage(imageName)
  revalidatePath('/', 'layout')
}


// .............Edit Section started from here...................

export async function editName(productId, formData){
const productName = formData.get('productName')
await updateProductName(productId, productName)
revalidatePath('/', 'layout')
} 

export async function editCategory(productId, formData){  
const productCategory = formData.get('category')
await updataProductCategory(productId, productCategory)
}

export async function editBrand(productId, formData){
const productBrand = formData.get('brand')
await updateProductBrand(productId, productBrand)
}

export async function editPrice(productId, formData){
  const productPrice = formData.get('productPrice')
  await updateProductPrice(productId, productPrice)
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
  revalidatePath('/', 'layout') 
}