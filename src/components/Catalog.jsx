import React from 'react'
import { card, blossoming, open } from '../assets'
import styles from '../style'

const Catalog = () => {
  return (
    <div className={`bg__green p-6 w-full ${styles.paddingX} ${styles.paddingY}`}>
      <section id='catalog' className='px-6'>
        <p className={`${styles.subtitle} text-center`}>Our Latest Releases</p>
        
        {/* Bento Section */}
        <div className='grid grid-cols-6 grid-rows-3 gap-x-6 gap-y-6'>

          {/* Custom Card: Spring Catalog */}
          <div className='relative flex flex-col col-span-3 row-span-2'>

            {/* SVG for background of Card */}
            <img src={card} alt='Custom Card'/>

            <div className='absolute flex flex-col w-[100%] h-[100%]'>

              {/* Top Div */}
              <div className='w-[100%] h-[68%] flex justify-center'>

                {/* Image */}
                <img src={blossoming} alt='Green Living Rooom' className='flex self-center object-cover w-[94%] h-[85%] rounded-t-[30px] rounded-bl-[20px] rounded-br-[25px]'/>
              </div>

              {/* Bottom Div */}
              <div className='w-[100%] h-[32%] flex flex-row justify-between items-center'>

                {/* Text */}
                <div className='w-[79%] flex flex-col items-center'>
                  <p className='font-montserrat font-medium text-[42px]'>Blossoming Beauties</p>
                  <p className='font-montserrat text-[18px]'>Welcome the Season with our Spring Collection</p>
                </div>

                {/* Button */}
                <div className='w-[18%] h-[85%] flex self-end justify-center'>
                  <a href='#spring' className='self-center'>
                    <img src={open} className='cursor-pointer self-center w-[50px] hover:w-[60px] h-[50px] hover:h-[60px] duration-300' />
                  </a>
                </div>
              </div>

            </div>
     
          </div>

          {/* Catalog 2 */}
          <div className='bg-cream col-span-3 row-span-2 rounded-[40px] flex justify-center items-center'>
            <img src={blossoming} alt='Catalog #2 Preview' className='object-cover max-w-[90%] h-[90%] rounded-[30px]'/>
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