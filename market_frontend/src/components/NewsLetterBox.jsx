import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>Suscribe now & get 20% off </p>
        <p className='text-gray-400 mt-3'></p>
        <form action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required/>
          <button className='bg-black text-yellow-100 text-xs px-10 py-4' type='submit'>
            Subscribe
          </button>
        </form>
    </div> 
  )
}

export default NewsLetterBox