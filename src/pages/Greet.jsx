import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Greet = ({ setgreetOpen }) => {
  const handleClose = () => {
    setgreetOpen(false)
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center z-50'>
     
      <div className='absolute inset-0 bg-black/50'></div>


      <div className='relative bg-white w-[20rem] p-6 rounded-lg shadow-lg z-10'>
        <div className='flex flex-col items-center text-center space-y-2'>
          <FaHeart className='text-red-500 text-2xl' />
          <h1 className='font-bold'>Thank you for connecting with us.</h1>
          <p>Our team will contact you soon.</p>
          <button onClick={handleClose} className='bg-red-500 text-white px-4 py-1 mt-3 rounded'>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default Greet
