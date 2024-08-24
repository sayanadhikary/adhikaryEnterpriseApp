'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="text-center">
        <h2 className="mt-36 p-6">Something went wrong! Sorry from Adhikary Enterprise</h2>
        <p className="p-6">Message: {error.message}</p>
        <button className="p-6 bg-green-700" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}