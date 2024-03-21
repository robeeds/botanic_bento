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

          <div className='relative flex flex-col col-span-3 row-span-2'>

            <img src={card} alt='Custom Card'/>

            <div className='absolute flex flex-col w-[100%] h-[100%]'>

              <div className='w-[100%] h-[68%] flex justify-center'>
                <img src={livingroom} alt='Green Living Rooom' className='flex self-center object-cover w-[94%] h-[85%] rounded-t-[30px] rounded-bl-[20px] rounded-br-[25px]'/>
              </div>

              <div className='w-[100%] h-[32%] flex flex-row justify-between items-center'>
                <div className='w-[79%] flex flex-col items-center'>
                  <p className='font-montserrat font-medium text-[42px]'>Blossoming Beauties</p>
                  <p className='font-montserrat text-[18px]'>Welcome the Season with our Spring Collection</p>
                </div>
                <div className='w-[18%] h-[85%] flex self-end justify-center'>
                  <img src={livingroom} className='w-[32px] h-[32px] self-center' />
                </div>
              </div>

              
              
              
            </div>
     
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