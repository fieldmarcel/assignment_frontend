import React from 'react'
import { FaHeart } from 'react-icons/fa'
const Greet = ({setgreetOpen}) => {

    const handleClose = () => {
setgreetOpen(false);}
    
  return (
    <div className=' fixed inset-0  bg-black/50 opacity-50 w-[12rem] h-[6rem] bg-white'>
<div className=' flex flex-col'>
    <p><FaHeart/></p>
    <h1>Thank you for connect with us. </h1>
    <p>Our team will contacting you soon</p>
    <button onClick={handleClose} className='bg-red-500'>Done</button>
</div>

    </div>
  )
}

export default Greet