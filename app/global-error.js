'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong! Sorry from Adhikary Enterprise</h2>
        <p>Message: {error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}