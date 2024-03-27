import { useState } from 'react'
import { Navbar, Hero, About, Catalog, Testimonials } from "./components"
import styles from "./style"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.boxWidth}`}>

      <div className={`${styles.paddingX} bg-radial_gradient`}>
        <Navbar />
        <Hero />
      </div>
      <div >
        <About />
      </div>
      <div className={``}>
        <Catalog />
      </div>
      <div className={``}>
        <Testimonials />
        {/* Add CTA Soon */}
      </div>


    </div>
    
  )
}

export default App
