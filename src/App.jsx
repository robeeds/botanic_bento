import { useState } from 'react'
import { Navbar, Hero } from "./components"
import styles from "./style"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.boxWidth}`}>

      <div className={`${styles.paddingX} bg-radial_gradient`}>
        <Navbar />
        <Hero />
      </div>


    </div>
    
  )
}

export default App
