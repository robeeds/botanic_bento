import React from 'react'
import { card, blossoming, open, rectanglecard, catalogtwo, catalogthree, catalogfour, catalogfive } from '../assets'
import styles from '../style'

const Catalog = () => {
  return (
    <div className={`bg__green p-6 w-full ${styles.paddingX} ${styles.paddingY}`}>
      <section id='catalog' className='px-6'>
        <p className={`${styles.subtitle} text-center pb-6`}>Our Latest Releases</p>
        
        {/* Bento Section */}
        <div className='grid grid-flow-row gap-4 sm:grid-cols-6 justify-center max-w-[1368px] md:max-h-[732px]'>


            {/* MD First Row */}
            <div className='relative flex w-full sm:col-span-3'>
              <img src={card} alt='Custom Card' className=''/>
              <div className='absolute w-[100%] h-[100%]'>

                {/* Image Section */}
                <div className='flex items-center justify-center w-[100%] h-[67%]'>
                  <img src={blossoming} alt='Spring Catalog' className='w-[93%] h-[85%] rounded-xl lg:rounded-t-[30px] lg:rounded-bl-[20px] lg:rounded-br-[25px]' />
                </div>

                <div className='flex flex-row h-[33%]'>

                  {/* Title */}
                  <div className='flex flex-1 flex-col items-center justify-center w-[79%] font-montserrat text-center'>
                    <p className='font-medium text-[14.5px] xs:text-[18px] sm:text-[20px] md:text-[28px] lg:text-[42px]'>Blossoming Beauties</p>
                    <p className='text-[8px] md:text-[12px] lg:text-[18px]'>Welcome the Season with Our Spring Collection</p>
                  </div>

                  {/* Button */}
                  <div className='flex justify-self-end self-end w-[18%] h-[84%] justify-center items-center'>
                    <img src={open} alt='' className='w-[50%] h-[50%] hover:w-[60%] hover:h-[60%] duration-100 cursor-pointer' />
                  </div>

                </div>

              </div>
            </div>

            {/* Catalog Two */}
            <div className='relative flex w-full sm:col-span-3 justify-center items-center'>
              <img src={rectanglecard} alt='Card' className='z-[1]'/>
              <img src={catalogtwo} alt='Catalog Two' className='absolute z-[2] w-[93%] h-[89%] rounded-xl lg:rounded-[30px]' />
            </div>

            {/* MD Second Row */}
            <div className='relative flex w-full sm:col-span-2 justify-center items-center'>
              <img src={rectanglecard} alt='Card' className='z-[1]'/>
              <img src={catalogthree} alt='Catalog Three' className='absolute z-[2] w-[93%] h-[89%] rounded-xl lg:rounded-[20px]' />
            </div>

            <div className='relative flex w-full sm:col-span-2 justify-center items-center'>
              <img src={rectanglecard} alt='Card' className='z-[1]'/>
              <img src={catalogfour} alt='Catalog Four' className='absolute z-[2] w-[93%] h-[89%] rounded-xl lg:rounded-[20px]' />
            </div>

            <div className='relative flex w-full sm:col-span-2 justify-center items-center'>
              <img src={rectanglecard} alt='Card' className='z-[1]'/>
              <img src={catalogfive} alt='Catalog Five' className='absolute z-[2] w-[93%] h-[89%] rounded-xl lg:rounded-[20px]' />
            </div>

        </div>


      </section>
    </div>
  )
}

export default Catalog