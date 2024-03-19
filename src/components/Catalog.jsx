import React from 'react'
import { card, livingroom } from '../assets'
import styles from '../style'

const Catalog = () => {
  return (
    <div className={`bg__green p-6 w-full ${styles.paddingX} ${styles.paddingY}`}>
      <section id='catalog' className='px-6'>
        <p className={`${styles.subtitle} text-center`}>Our Latest Releases</p>
        
        {/* Bento Section */}
        <div className={`flex gap-8`}>
          <div className={`flex flex-col relative`}>
              <img src={card} className='w-[100%] h-[100%]' />
              <div className='absolute bottom-0'>
                <p className=''>Blossoming Beauties</p>
                <p className=''>Welcome the Season with Our Spring Collection</p>
              </div>
          </div>
          
          
        </div>
      </section>
    </div>
  )
}

export default Catalog