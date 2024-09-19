import React from 'react'
import Subheaders from '../components/subheaders'
import { whiteLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black px-20 py-8 flex flex-col justify-center items-center text-white'>
        <h3 className='font-semibold text-lg text-center'>LET'S LINK UP!</h3>
        <img src={whiteLogo} alt="Susan Augustt logo" className='w-[850px]' />
        <p><a href="mailto:info@susanaugustt.com" className='text-[16px]'>info@susanaugustt.com</a></p>
    </div>
  )
}

export default Footer