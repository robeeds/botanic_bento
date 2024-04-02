import { useState } from 'react'
import { Navbar, Hero, About, Catalog, Testimonials, CTA, Footer } from "./components"
import styles from "./style"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.boxWidth}`}>

      <div className={`${styles.paddingX} bg-radial_gradient`}>
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
        <Catalog />
      </div>
      <div className={`w-full ${styles.paddingY} bg-cream`}>
        <Testimonials />
        <CTA />
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} bg__green`}>
        <Footer />
      </div>


    </div>
    
  )
}

export default App
