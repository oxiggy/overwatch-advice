import { useEffect, useState } from 'react';
import { advices } from './data.js'

function App() {
  const [index, setIndex] = useState(0);

  const randomIndex = () => {
    setIndex(Math.floor(Math.random() * advices.length))
  }

   useEffect(() => {
     randomIndex()
   }, [])

  return (
    <div className="app" onClick={randomIndex}>
      <h1>{advices[index]}</h1>
    </div>
  )
}

export default App
