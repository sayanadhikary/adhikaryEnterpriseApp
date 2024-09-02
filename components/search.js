'use client'

import { useState } from "react"
import Link from "next/link"

export default function Search(){

    const [searchInput, setSearchInput] = useState("")

    return (
        <>
        <div className="flex justify-evenly p-1 pb-2" >
            <input className="w-10/12 ml-5 text-sm px-2 rounded-md text-gray-700" type="text" id="search" name="search"
             placeholder="Search in Adhikary Enterprise"  value={searchInput}
             onChange={e => setSearchInput(e.target.value)} required ></input>
            <div className="w-2/12" >
            <Link href={`/search/${searchInput}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </Link>
            </div>
        </div>  
        </>
    )
}