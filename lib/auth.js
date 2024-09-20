'use server'

import { revalidatePath } from "next/cache";
import { getAllUsers, storeUser } from "./sqldatabase";

export async function signUp(prevState, formData){
    const phoneNumber = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('repeat_password');
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const address = formData.get('address')

    let errors = {};
    let phoneNumbers = []
    const savedUsers = await getAllUsers();
    savedUsers.map(user => {
        phoneNumbers.push(user.phone_number)
        return phoneNumbers
    })
    console.log(phoneNumbers)

    if (password.trim().length < 8){
        errors.password = "Password must be 8 character long."
    }
    if (password !== confirmPassword){
        errors.mismatch = "Password doesnot match."
    }
    if (phoneNumber.includes(phoneNumber)){
        errors.duplicate = "Phone number already exists!"
    }
    if (Object.keys(errors).length > 0){
        return {
            errors,
        }
    }
    await storeUser({firstName, lastName, phoneNumber, address, password});
    revalidatePath('/admin/users')
    return {
        message: "User created successfully"
    }
}