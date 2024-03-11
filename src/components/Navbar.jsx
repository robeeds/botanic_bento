import React from 'react'
import { logo, search, bag, account } from '../assets'
import styles from '../style'

const Navbar = () => {
  return (
    <div id="nav" className=''>
      <div className={`grid grid-cols-3 grid-flow-row ${styles.paragraph} items-center justify-between p-6`}>

        {/* Brand */}
        <div className='flex flex-start items-center'>
          <img src={logo} alt='Botanic Bento' className='w-[32px] h-[32px]' />
          <p className='text-[32px] px-2 font-playfair font-semibold'>Botanic Bento</p>
        </div>

        {/* Search Bar */}
        <div className='flex flex-row items-center bg-cream rounded-full'>
          <input type="text" name="Search" placeholder='Search Catalog' className='flex flex-1 bg-cream py-2 px-4 font-montserrat placeholder:text-darkGreen outline-none tracking-wide rounded-full w-[500px] h-[40px]' />
          <img src={search} className='md:mr-2 w-[24px] h-[24px] hover:cursor-pointer'/>
        </div>
        
        
        {/* Links */}
        
        <div className='flex flex-row justify-end items-center font-montserrat text-cream'>

          <p className='md:px-2 lg:px-4 hover:cursor-pointer'>about</p>
          <p className='md:px-2 lg:px-4 hover:cursor-pointer'>contact</p>

          {/* Shopping Bag */}
          <div className='flex bg-cream rounded-full w-[48px] h-[48px] justify-center items-center sm:mx-2 lg:mx-4 hover:cursor-pointer'>
            <img src={bag} alt='shopping bag' className='flex flex-1 max-w-[28px] max-h-[28px]' />
          </div>

          {/* Account */}
          <div className='flex bg-cream rounded-full w-[48px] h-[48px] justify-center items-center sm:mx-2 lg:mx-4 hover:cursor-pointer'>
            <img src={account} alt='account' className='flex flex-1 max-w-[32px] max-h-[32px]' />
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Navbar