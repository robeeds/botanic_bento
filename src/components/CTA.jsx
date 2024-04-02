import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <div className={`${styles.paddingX}`}>
        <section id="contact" className={`${styles.paddingY} flex flex-col justify-center items-center bg-lightGreen rounded-[30px]`}>

            {/* Title */}
            <p className={`font-montserrat font-semibold xxs:text-[20px] md:text-[40px] text-center max-w-[80%]`}>Never Miss a Leaf: Sign Up for Our Newsletter and Stay Botanically Informed</p>

            {/* SearchBar */}
            <div className='relative flex items-center align-middle min-w-[200px] w-[60%] drop-shadow-lg xxs:mt-8'>
                <input name='search' placeholder='Enter Email' className='w-full rounded-full bg-grey px-4 py-3 font-montserrat text-[18px] text-green outline-none' />
                <div className='absolute flex items-center bg-lime font-montserrat text-white right-0 rounded-full px-4 py-3 h-[100%]'>
                  <a href='#sent'>Subscribe</a>
                </div>
            </div>

        </section>
    </div>
  )
}

export default CTA