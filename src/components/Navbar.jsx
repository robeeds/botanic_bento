import { useState } from 'react'
import { logo, search, bag, account, menu, exit } from '../assets'
import styles from '../style'

const Navbar = () => {

  {/* Setting Menu Toggle */}
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`grid grid-cols-3 grid-flow-row gap-2 p-6 items-center font-montserrat`}>
      
      {/* Brand */}
      <div className='flex flex-row items-center xxs:col-span-2 md:col-span-1'>
        <img src={logo} alt='Botanic Bento' className='h-[32px] w-[32px]'/>
        <p className='font-playfair font-semibold xxs:text-[18px] sm:text-[32px] ml-2'>Botanic Bento</p>
      </div>

      {/* MD Visible Nav */}
      <div className='xxs:hidden md:flex col-span-2'>

        {/* SearchBar */}
        <div className='flex flex-1 items-center col-span-1 bg-cream rounded-full drop-shadow-lg'>
          <input placeholder='Search Catalog...' className='flex flex-1 placeholder-green text-green bg-cream py-2 px-4 outline-none rounded-full' />
          <img src={search} alt='search' className='h-[28px] w-[28px] right-0 mx-2 hover:cursor-pointer'/>
        </div>

        {/* Links */}
        <div className='flex flex-1 flex-row col-span-1 items-center justify-end text-grey'>
          
          <a className='px-2 hover:cursor-pointer' href='#about'>about</a>
          <a className='px-2 hover:cursor-pointer' href='#contact'>contact</a>
          <a  href='#bag' className='flex bg-cream h-[40px] w-[40px] rounded-full mx-2 px-2 items-center hover:cursor-pointer drop-shadow-lg'>
            <img src={bag} alt='shopping bag' className='h-[32px] w-[32px]' />
          </a>
          <a href='#account' className='flex bg-cream h-[40px] w-[40px] rounded-full mx-2 px-2 hover:cursor-pointer items-center drop-shadow-lg'>
            <img src={account} alt='account' className='h-[32px] w-[32px]' />
          </a>
          
        </div>
        
      </div>

      {/* SM Visible Menu */}
      <div className='z-[5] flex justify-end items-center md:hidden'>

        {/* Menu Toggle on Click */}
        <img src={toggle ? exit : menu} 
          alt="menu" 
          className="w-[32px] h-[32px] object-contain" 
          onClick={() => setToggle((prev) => !prev)}/>

        {/* Menu List Items */}
        <div className={`${toggle ? 'flex' : 'hidden'} flex flex-col absolute right-0 px-6 xxs:top-[80px] sm:top-[96px] bg-green rounded-bl-xl`}>
          <div className='flex flex-1 flex-col text-grey'>

            {/* SearchBar */}
            <div className='flex flex-1 items-center col-span-1 bg-cream rounded-full mt-2'>
              <input className='flex flex-1 h-[24px] text-green bg-cream p-2 outline-none rounded-full' />
              <img src={search} alt='search' className='h-[24px] w-[24px] right-0 mx-2 my-1 hover:cursor-pointer'/>
            </div>

            {/* Links */}
            <a className='pt-2 hover:cursor-pointer' href='#about'>about</a>
            <a className='pt-2 hover:cursor-pointer' href='#contact'>contact</a>
            <a className='pt-2 hover:cursor-pointer' href='#bag'>bag</a>
            <a className='py-2 hover:cursor-pointer' href='#account'>account</a>

          </div>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar