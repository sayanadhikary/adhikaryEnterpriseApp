
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

  export async function removeCategory(categoryName){
    const deleteCategory = sql`
    delete from categories
    where category_name = ${categoryName}`
    return deleteCategory;
  }

  export async function storeBrand(brand){
    const savedBrand = await sql`
         insert into brands (brand_name, image)
         values (${brand.brandName}, ${brand.image})
         `;   
     return savedBrand;    
  }
  export async function removeBrand(brandName){
    const deleteBrand = sql`
    delete from brands
    where brand_name = ${brandName}`
    return deleteBrand;
  }

export async function storeUser(user){
    const createUser = await sql`
    insert into users (first_name, last_name, phone_number, address, password)
    values (${user.firstName}, ${user.lastName}, ${user.phoneNumber}, ${user.address}, ${user.hashedPassword})
    returning id`;
    return createUser;
} 
export async function removeUser(userId){
    const deleteUser = sql`
    delete from users
    where id = ${userId}`
    return deleteUser;
} 
export async function getUserByPhoneNumber(phoneNumber){
    const getUser = sql`
    select * from users
    where phone_number = ${phoneNumber}`
    return getUser;
}
export async function getUserById(userId){
    const foundUser = sql`
    select * from users
    where id = ${userId}`
    return foundUser;
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

export async function getAllUsers(){
    const allUsers = await sql`
    select * from users`
    return allUsers;
}   

export async function getProduct(productId){
    const product = await sql`
    select * from products 
    where id = ${productId}`
    return product
}

export async function getCategory(categoryId){
    const category = await sql`
    select * from categories
    where id = ${categoryId}`;
    return category;
}

export async function getBrand(brandId){
    const brand = await sql`
    select * from brands
    where id = ${brandId}`;
    return brand;
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

export async function updateCategoryProducts(oldCategoryName, newCategoryName){
    const updateProducts = await sql`
    update products
    set category = ${newCategoryName}
    where category = ${oldCategoryName}`;
    return updateProducts;
}
export async function updateBrandProducts(oldBrandName, newBrandName){
    const updateProducts = await sql`
    update products
    set brand = ${newBrandName}
    where brand = ${oldBrandName}`;
    return updateProducts;
}

export async function updateCategoryName(categoryId, categoryName){
    const updateCategoryName = await sql`
    update categories
    set category_name = ${categoryName}
    where id = ${categoryId}`;
    return updateCategoryName;
}
export async function updateCategoryImage(categoryId, imageUrl){
    const updateCategoryImage = await sql`
    update categories
    set image = ${imageUrl}
    where id = ${categoryId}`;
    return updateCategoryImage;
}

export async function updateBrandName(brandId, brandName){
    const updateBrandName = await sql`
    update brands
    set brand_name = ${brandName}
    where id = ${brandId}`;
    return updateBrandName;
}
export async function updateBrandImage(brandId, imageUrl){
    const updateBrandImage = await sql`
    update brands
    set image = ${imageUrl}
    where id = ${brandId}`;
    return updateBrandImage;
}
