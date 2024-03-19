import React from 'react'
import { card, livingroom } from '../assets'
import styles from '../style'

const Catalog = () => {
  return (
    <div className={`bg__green p-6 w-full ${styles.paddingX} ${styles.paddingY}`}>
      <section id='catalog' className='px-6'>
        <p className={`${styles.subtitle} text-center`}>Our Latest Releases</p>
        
        {/* Bento Section */}
        <div className='grid grid-cols-6 grid-rows-3 gap-x-6 gap-y-6'>
          <div className='col-span-3 row-span-2'>
            <img src={card} className='w-[100%] h-[100%]' />
          </div>
          <div className='bg-cream col-span-3 row-span-2 rounded-[40px]'>

          </div>
          <div className='bg-cream col-span-2 row-span-1 rounded-[30px]'>

          </div>
          <div className='bg-cream col-span-2 row-span-1 rounded-[30px]'>

          </div>
          <div className='bg-cream col-span-2 row-span-1 rounded-[30px]'>

          </div>
        </div>


      </section>
    </div>
  )
}

export default Catalog