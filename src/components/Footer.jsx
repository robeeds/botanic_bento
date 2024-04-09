import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <div>

      {/* Upper Portion of Footer */}
      <div className='flex xxs:flex-col sm:flex-row'>

        <div className='flex flex-1 flex-col'>
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
        </div>

        {/* Links */}
        <div className='flex xxs:flex-col sm:flex-row'>

          <div className={`flex xxs:flex-col sm:flex-row`}>
            {footerLinks.map((footerLink)=> (
                <div key={footerLink.key} className="sm:ml-2 md:mx-4 ">
                  <p className="font-playfair font-semibold xxs:text-[24px] md:text-[32px]">
                    {footerLink.title}
                  </p>
                  <ul className="font-montserrat font-regular text-[16px] list-none">
                    {footerLink.links.map((link) => (
                      <li key={link.name} className={`mb-1`}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>  
              ))}
          </div>

        </div>

      </div>
      
      {/* Divider */}
      <hr className='mt-6 mb-2 border-black'/>

      {/* Bottom Portion of Footer */}
      <div className='w-full flex flex-col sm:flex-row items-center'>

        {/* Copyright */}
        <p className='flex flex-1 font-montserrat xxs:text-center sm:text-left'>Copyright © Botanic Bento 2024. All Rights Reserved.</p>

        {/* Social Media */}
        <div className='flex flex-row'>
          {socialMedia.map((platform, index) => (
            <img src={platform.img} alt={platform.name} className='w-[32px] h-[32px] mx-2' />
          ))}
        </div>

      </div>


    </div>
  )
}

export default Footer