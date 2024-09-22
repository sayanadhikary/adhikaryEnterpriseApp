'use client'

import { useFormState} from "react-dom";
import { login } from "@/lib/auth";

export default function LoginPage(){
  const [formState, formAction] = useFormState(login, {})
    return (
        <> 
        <h2 className="max-w-sm mt-20 mx-auto text-center p-4 m-4">Welcome to Adhikary Enterprise</h2>
<form className="max-w-sm mx-auto" action={formAction}>
  <div className="mb-5">
    <label htmlFor="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile number</label>
    <input type="number" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your mobile number" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
  </div>
  {formState.error && <p className="text-xs text-red-500 mb-5">{formState.error}</p>}
  <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Login</button>
</form>
        </>
    )
}