import React from 'react'
import { landingplant } from "../assets"
import styles from '../style'

const Hero = () => {
  return (
    <div className={`relative ${styles.boxWidth} w-full`}>
        <section id="home" className='flex xxs:flex-wrap sm:flex-nowrap md:justify-center'>
            <div className='flex flex-col sm:self-center ml-6'>
                <p className={`${styles.title} whitespace-nowrap pb-0 mb-0`}>Botanic Bento</p>
                <p className={`${styles.subtitle} whitespace-nowrap -mt-3 lg:-mt-10`}>Bring Beauty to your home</p>
                <button className='flex bg-lime text-[24px] text-cream font-montserrat justify-center max-w-[258px] rounded-full py-2'>Explore Catalog</button>
            </div>
            <div className='z-[4] self-center'>
                <img src={landingplant} alt='landing plant' className='w-[100%] h-[100%]'/>
            </div>
        </section>
    </div>
  )
}

export default Hero