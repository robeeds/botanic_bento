import React from 'react'
import { livingroom } from "../assets"
import styles from '../style'

const About = () => {
  return (
    <div className='relative flex w-full font-montserrat'>

      {/* Overlap */}
      <div className='absolute z-[0] w-full bg-cream xxs:h-16 xxs:-top-8 md:h-24 sm:-top-12' />

      {/* About Section */}
      <section id='about' className={`z-[4] ${styles.paddingX} ${styles.paddingY} bg-cream w-full flex flex-col-reverse md:flex-row items-center p-6`} >

        {/* Image */}
        <div className='flex xxs:m-6'>
          <img src={livingroom} alt='livingroom' className='flex flex-1 rounded-[25px] md:max-w-[300px] lg:max-w-[500px]'/>
        </div>

        {/* Description */}
        <div className='flex flex-col px-6'>
            
            {/* Text */}
            <p className={`${styles.heading}`}>Welcome to Botanic Bento: <br/> Where Nature Meets Home Decor</p>
            <br/>
            <p className={`${styles.paragraph}`}>At Botanic Bento, we believe in the transformative power of nature-inspired design. Our mission is to cultivate spaces that inspire serenity and evoke a sense of harmony with the natural world. With a passion for quality craftsmanship and an eye for timeless beauty, we curate a collection of botanical home decor pieces that invite the outdoors in, elevating your living experience. </p>
            <br/>
            <p className={`${styles.paragraph} font-medium md:text-[24px]`}>Join us in bringing the tranquility of nature into your home, one carefully chosen accent at a time.</p>
            <br/>

            {/* Button */}
            <div className='flex'>
              <a href='#catalog' className='bg-lime font-montserrat text-white px-2 md:px-4 py-1 md:py-2 rounded-full'>Explore Catalog</a>
            </div>

        </div>
        
      </section>
    </div>
  )
}

export default About