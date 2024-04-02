import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div>

      {/* Logo */}
      <div className='flex flex-row items-center'>
        <img src={logo} alt='Botanic Bento Logo' className='object-contain w-[32px] h-[32px] md:w-[60px] md:h-[60px]' />
        <div className='font-playfair font-semibold ml-4'>
          <p className='xxs:text-[20px] md:text-[30px]'>Botanic Bento</p>
          <p className='xxs:text-[16px] md:text-[20px]'>Bring Beauty to Your Home</p>
        </div>
      </div>

      {/* Addresses */}
      <div className='font-montserrat mt-2'>
          <p>botanicbento@email.com</p>
          <p>1 (123)-456-7890</p>
      </div>

      {/* Links */}
      <div>
        
      </div>

    </div>
  )
}

export default Footer