import sql from 'better-sqlite3';
import { nanoid } from 'nanoid';

const db = new sql('enterprise.db');

function initDb(){
    db.exec(`
        CREATE TABLE IF NOT EXISTS products(
        id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
        name CHAR NOT NULL UNIQUE,
        category CHAR NOT NULL,
        brand CHAR NOT NULL,
        price MONEY NOT NULL,
        image TEXT  NOT NULL
        )`
    ); 
    
    db.exec(`
        CREATE TABLE IF NOT EXISTS categories(
        id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
        category_name CHAR NOT NULL UNIQUE,
        image TEXT NOT NULL
        )`
    );   

    db.exec(`
        CREATE TABLE IF NOT EXISTS brands(
        id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
        brand_name CHAR NOT NULL UNIQUE,
        image TEXT NOT NULL
        )`
    );   

} 


initDb()

export function storeProduct(product){
   const method = db.prepare(`
        INSERT INTO products
        VALUES(?, ?, ?, ?, ?, ?)
        `);   
    return  method.run(product.id, product.productName, product.category, product.brand, product.price, product.image)     
}

export function deleteFromProducts(productId){
    const method = db.prepare(`
        DELETE FROM products
        WHERE id = ?
        `);
    return method.run(productId)
}

export function storeCategory(category){
    const method = db.prepare(`
         INSERT INTO categories
         VALUES(?, ?, ?)
         `);   
     return  method.run(category.id, category.categoryName, category.image)     
  }

  export function storeBrand(brand){
    const method = db.prepare(`
         INSERT INTO brands
         VALUES(?, ?, ?)
         `);   
     return  method.run(brand.id, brand.brandName, brand.image)     
  }

export function getAllProducts(){
 return db.prepare(`SELECT * FROM products`).all()
}

export function getAllCategories(){
    return db.prepare(`SELECT * FROM categories`).all()   
   }

   export function getAllBrands(){
    return db.prepare(`SELECT * FROM brands`).all()   
   }

export function getProduct(productId){
    return db.prepare(`
        SELECT * FROM products
        WHERE id = ?
        `).get(productId)
}

