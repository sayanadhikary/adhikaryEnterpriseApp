'use server'

import { revalidatePath } from "next/cache";
import { getUserByPhoneNumber, storeUser } from "./sqldatabase";
import { hashUserPassword, verifyPassword } from "./hash";
import { createAuthSession, destroySession } from "./lucia-auth";
import { redirect } from "next/navigation";

export async function signUp(prevState, formData){
    const phoneNumber = +formData.get('phone')*1;
    const password = formData.get('password');
    const confirmPassword = formData.get('repeat_password');
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const address = formData.get('address')

    const hashedPassword = hashUserPassword(password)

    let errors = {};  

    if (phoneNumber.toString().length != 10){
        errors.phone = "Mobile number should be 10 digits long."
    }
    if (password.trim().length < 8){
        errors.password = "Password must be 8 character long."
    }
    if (password !== confirmPassword){
        errors.mismatch = "Password doesnot match."
    }   
    if (Object.keys(errors).length > 0){
        return {
            errors,
        }
    }
    try {        
      const resultArr =  await storeUser({firstName, lastName, phoneNumber, address, hashedPassword});
      const id =resultArr[0].id;
      await createAuthSession(id);
      revalidatePath('/admin/users');
      return {
        message: "✔ User created successfully."
    }
    } catch (error) {
      errors.dbError = error.detail;
      return {
        errors,
      }
    }   
   
}

export async function login(prevState, formData){
    const phoneNumber = +formData.get('phone')*1;
    const password = formData.get('password');

    const existingUser = await getUserByPhoneNumber(phoneNumber)

    if(existingUser.length == 0){
        return {
            error: "You are not a valid user!"
        }
    }
    const isValidPassword = verifyPassword(existingUser[0].password, password);
    if(!isValidPassword){
        return {
            error: "Wrong password!"
        }
    }
    await createAuthSession(existingUser[0].id);
    return redirect('/')
}

export async function logout(){
    await destroySession();
   return redirect('/')
}