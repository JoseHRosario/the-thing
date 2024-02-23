"use client"
export default function ErrorBoundary({ error, reset }: {
    error: Error,
    reset: () => void
}) {
    return (<>
        <h1>Error</h1>
        <h2>{error.message}</h2>
        <button onClick={reset}>Reset</button>
    </>
    );
}