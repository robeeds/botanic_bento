import { useState } from 'react'
import { Navbar } from "./components"
import styles from "./style"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div className={`${styles.marginX} ${styles.paddingX}`}>
        <Navbar />
      </div>


    </div>
    
  )
}

export default App
