'use client' // Error boundaries must be Client Components
import Link from "next/link"
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="text-center">
        <h1 className="text-cyan-500 text-xl font-bold">Adhikary Enterprise</h1>
        <h2 className="mt-36 p-6">Something went wrong!</h2>
        <p className="p-6">Message: {error.message}</p>
        <button className="p-4 bg-yellow-700 rounded-md m-2" onClick={() => reset()}>Try again</button>
        <Link className="p-4 bg-green-700 rounded-md m-2" href={"/"}>Go Home</Link>
      </body>
    </html>
  )
}