
import sql from "@/db";

export async function storeProduct(product){
   const savedProduct = await sql`
        insert into products (name, category, brand, price, image)
        values (${product.name}, ${product.category}, ${product.brand}, ${product.price}, ${product.image})
        `; 
    return savedProduct;    
}

export async function deleteFromProducts(productId){
    const deletedProduct = await sql`
    delete from products
    where id = ${productId}`
    return deletedProduct;
}

export async function storeCategory(category){
    const savedCategory = await sql`
         insert into categories (category_name, image)
         values (${category.categoryName}, ${category.image})
         `;   
     return savedCategory;   
  }

  export async function storeBrand(brand){
    const savedBrand = await sql`
         insert into brands (brand_name, image)
         values (${brand.brandName}, ${brand.image})
         `;   
     return savedBrand;    
  }

export async function getAllProducts(){
    const allProducts = await sql`
    select * from products`
 return allProducts;
}

export async function getAllCategories(){
    const allCategories = await sql`
    select * from categories`
    return allCategories  
   }

   export async function getAllBrands(){
    const allBrands = await sql`
    select * from brands`
    return allBrands
   }

export async function getProduct(productId){
    const product = await sql`
    select * from products 
    where id = ${productId}`
    return product
}

export async function getCategorisedProducts(categoryName){
    const categorisedProducts = await sql`
    select * from products
    where category = ${categoryName}`;
    return categorisedProducts;
}

export async function getBrandedProducts(brandName){
    const brandedProducts = await sql`
    select * from products
    where brand = ${brandName}`;
    return brandedProducts;
};

export async function getSearchedProducts(searchInput){
    const foundProducts = await sql`
    select * from products
    where name like ${searchInput}`;
    return foundProducts;
}