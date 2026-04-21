"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <head>
        <title>Error — PMI Total Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif", gap: "16px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Something went wrong</h2>
        <button
          onClick={reset}
          style={{ padding: "8px 20px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Try Again
        </button>
      </body>
    </html>
  )
}
