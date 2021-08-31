import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Click {count}
      </button>
    </div>
  )
}

export default ClickCounter
