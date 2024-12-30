import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-2 border-gray-600'>
      {/*----------Hero Left Side ----------------------*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#303030]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular leading-relaxed text-3xl lg:text-5xl'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md::text-base'>SHOP NN</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
    {/*--------- Hero Right Side image----------------------*/ }    
        <img src={assets.hero_design} className='w-full sm:w-1/2' alt="" />

        

    </div>
  )
}

export default Hero
