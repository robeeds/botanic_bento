import React from 'react'
import { landingplant } from "../assets"
import styles from '../style'

const Hero = () => {
  return (
    <div className={`relative ${styles.boxWidth} w-full`}>
        <section id="home" className='flex xxs:flex-wrap sm:flex-nowrap md:justify-center'>
            <div className='z-[4] flex flex-col sm:self-center ml-6'>
                <p className={`${styles.title} whitespace-nowrap pb-0 mb-0`}>Botanic Bento</p>
                <p className={`font-playfair font-semibold xxs:text-[20px] md:text-[44px] lg:text-[60px] whitespace-nowrap -mt-3 lg:-mt-10`}>Bring Beauty to your home</p>
                <div className='flex'>
                  <a href='#catalog' className='bg-lime font-montserrat text-white px-2 md:px-4 py-1 md:py-2 rounded-full'>Explore Catalog</a>
                </div>
            </div>
            <div className='z-[3] self-center sm:py-6 md:py-0'>
                <img src={landingplant} alt='landing plant' className='w-[100%] h-[100%]'/>
            </div>
        </section>
    </div>
  )
}

export default Hero