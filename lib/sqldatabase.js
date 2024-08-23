
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
    where name like ${searchInput} or category like ${searchInput} or brand like ${searchInput}`;
    return foundProducts;
}

// .....................Edit Section...................

export async function updateProductName(productId, productName){
    const updateName = await sql`
    update products
    set name = ${productName}
    where id = ${productId}`;
    return updateName;
}
export async function updataProductCategory(productId, category){
    const updateCategory = await sql`
    update products
    set category = ${category}
    where id = ${productId}`;
    return updateCategory
}
export async function updateProductBrand(productId, brand){
    const updateBrand = await sql`
    update products
    set brand = ${brand}
    where id = ${productId}`;
    return updateBrand;
}
export async function updateProductPrice(productId, price){
    const updatePrice = await sql`
    update products
    set price = ${price}
    where id = ${productId}`;
    return updatePrice;
}
export async function updateProductImage(productId, newImageUrl){
    const updateImage = await sql`
    update products
    set image = ${newImageUrl}
    where id = ${productId}`;
    return updateImage;
}