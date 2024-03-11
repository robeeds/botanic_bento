import { useState } from 'react'
import { Navbar } from "./components"
import styles from "./style"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.boxWidth}`}>

      <div className={`${styles.paddingX} bg-radial_gradient`}>
        <Navbar />
      </div>


    </div>
    
  )
}

export default App
