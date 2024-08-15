
import sql from "@/db"

// export async function getUsersOver() {
//     const users = await sql`
//       create table brands (
//       id bigint generated always as identity primary key not null,
//       brand_name varchar not null,
//       image varchar not null
//       )
//     `  
//     return users  
//   }

// function initDb(){
//     db.exec(`
//         CREATE TABLE IF NOT EXISTS products(
//         id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
//         name CHAR NOT NULL UNIQUE,
//         category CHAR NOT NULL,
//         brand CHAR NOT NULL,
//         price MONEY NOT NULL,
//         image TEXT  NOT NULL
//         )`
//     ); 
    
//     db.exec(`
//         CREATE TABLE IF NOT EXISTS categories(
//         id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
//         category_name CHAR NOT NULL UNIQUE,
//         image TEXT NOT NULL
//         )`
//     );   

//     db.exec(`
//         CREATE TABLE IF NOT EXISTS brands(
//         id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
//         brand_name CHAR NOT NULL UNIQUE,
//         image TEXT NOT NULL
//         )`
//     );   

// } 


// initDb()



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

