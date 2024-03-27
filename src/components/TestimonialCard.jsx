import React from 'react'
import styles from '../style'

const TestimonialCard = ({ quote, image, name }) => {
  return (
    <div className='flex flex-col p-6'>
        <p className={`${styles.paragraph} pb-4`}>"{quote}"</p>
        <div className='flex flex-row items-center'>
            <div className='relative bg-lightGreen w-[60px] h-[60px] rounded-full flex justify-center items-center drop-shadow-lg'>
                <img src={image} alt={name} className='absolute object-contain h-[40px] w-[40px] rounded-full drop-shadow-sm'/>
            </div>
            <p className={`${styles.heading2} px-2`}>{name}</p>
        </div>
        
    </div>
  )
}

export default TestimonialCard