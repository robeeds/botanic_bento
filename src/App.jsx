import { useState } from 'react'
import { Navbar } from "./components"
import styles from "./constants/style.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.marginX} ${styles.paddingX}`}>
      <Navbar />
    </div>
  )
}

export default App
