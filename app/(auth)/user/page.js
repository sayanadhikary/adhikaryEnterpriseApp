'use client'

import { logout } from "@/lib/auth";
import { useStorage } from "@/zustand/store";
import Link from "next/link";

export default function UserPage(){
    const user = useStorage((state) => state.user)[0]
    return (
        <>       
<Link href={`/user/${user.id}`} className=" mt-20 ms-4 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                 
    <span className="w-full">🛒🛍️ My orders</span>
    <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</Link> 
<div className="overflow-hidden shadow rounded-lg border m-4 mt-6">
    <div className="px-4 py-5 sm:px-6">    
    <h3 className="text-lg leading-6 font-medium">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm">
            This is some information about you.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">
                    Full name
                </dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {user && user.first_name} {user && user.last_name}
                </dd>
            </div>
           
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">
                    Phone number
                </dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {user && user.phone_number}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium">
                    Address
                </dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {user && user.address}
                </dd>
            </div>
        </dl>
    </div>
</div>
<div className="p-4">
<button type="button" className="w-full my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit profile</button>
<form action={logout}><button type="submit" className="w-full my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button></form>
</div>

        </>
    )
}