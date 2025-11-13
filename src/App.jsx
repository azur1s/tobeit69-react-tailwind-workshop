import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">React + Tailwind Workshop</h1>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
