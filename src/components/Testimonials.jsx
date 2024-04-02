import React from 'react'
import styles from '../style'
import TestimonialCard from './TestimonialCard'
import { testimonialInfo } from '../constants'

const Testimonials = () => {
  return (
    <div className={`${styles.paddingX} bg-cream flex flex-col items-center`}>
        <div className='border-b-black border-b-2 w-full text-center pb-2'>
            <p className={`${styles.subtitle}`}>Testimonials</p>
        </div>
        <hr />
        
        {/* Testimonial Cards */}
        <div className='flex flex-wrap md:flex-nowrap justify-evenly p-6'>
            {testimonialInfo.map((index) => 
                <TestimonialCard key={index.id} {...index} />
            )}
        </div>

    </div>
  )
}

export default Testimonials