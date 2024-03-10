import React from 'react'
import { logo, search, bag, account } from '../assets'

const Navbar = () => {
  return (
    <div>
      <div className='grid grid-cols-3 grid-flow-row items-center justify-between p-6'>

        {/* Brand */}
        <div className='flex flex-start items-center'>
          <img src={logo} alt='Botanic Bento' className='w-[32px] h-[32px]' />
          <p className='text-[32px] px-2 font-playfair font-semibold'>Botanic Bento</p>
        </div>

        {/* Search Bar */}
        <div className='relative flex flex-row items-center'>
          <input type="text" name="Search" placeholder='Search Catalog' className='bg-cream py-2 px-4 font-montserrat placeholder:text-lightGreen text-[24px] tracking-wide rounded-full w-[500px] h-[60px]' />
          <img src={search} className='absolute right-3 w-[35px] h-[35px] hover:cursor-pointer'/>
        </div>
        
        
        {/* Links */}
        <div className='flex flex-row justify-end items-center font-montserrat text-[20px]'>

          <p className='px-2 hover:cursor-pointer'>about</p>
          <p className='px-2 hover:cursor-pointer'>contact</p>

          {/* Shopping Bag */}
          <div className='flex bg-cream rounded-full w-[60px] h-[60px] justify-center items-center mx-2 hover:cursor-pointer'>
            <img src={bag} className='flex flex-1 max-w-[35px] max-h-[35px]' />
          </div>

          {/* Account */}
          <div className='flex bg-cream rounded-full w-[60px] h-[60px] justify-center items-center mx-2 hover:cursor-pointer'>
            <img src={account} className='flex flex-1 max-w-[40px] max-h-[40px]' />
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Navbar