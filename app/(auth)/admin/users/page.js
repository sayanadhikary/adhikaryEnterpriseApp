import Link from "next/link";
import Button from "@/components/button";
import { getAllUsers } from "@/lib/sqldatabase";
import { deleteUser } from "@/lib/actions";

export default async function UsersPage(){
    const users = await getAllUsers();

    return (
        <>       
<div className="relative my-24 ms-64">
<Link href="/admin/users/addUser"><Button buttonText={"Add New User"} /></Link>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Customer name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone number
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>                
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.first_name + " " + user.last_name}
                </th>
                <td className="px-6 py-4">
                    {user.phone_number}
                </td>
                <td className="px-6 py-4">
                    {user.address}
                </td>
                {/* <td className="px-6 py-4">
                <form action={deleteUser.bind(null, user.id)}><button className="bg-red-700 mx-1 p-1 rounded-md" >🗑️</button></form>
                </td> */}
            </tr>
            ))}
            
        </tbody>
    </table>
</div>
        </>
    )
}