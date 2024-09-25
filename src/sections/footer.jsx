import React from 'react';
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Subheaders from '../components/subheaders'
import { whiteLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black px-20 py-8 flex flex-col justify-center items-center text-white'>
        <h3 className='font-semibold text-lg text-center'>LET'S LINK UP!</h3>
        <img src={whiteLogo} alt="Susan Augustt logo" className='w-[850px]' />
        <p><a href="mailto:info@susanaugustt.com" className='text-[16px]'>info@susanaugustt.com</a></p>
        {/* Social media Buttons */}
        <div className="flex flex-row sm:flex-row sm:gap-4 gap-2 items-center">
              <a
                href="https://www.instagram.com/susan_augustt/"
                target="_blank"
                className="text-white"
              >
                <Instagram size={20}/>
              </a>
              <a
                href="https://twitter.com/susan_augustt"
                target="_blank"
                className="text-white"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://web.facebook.com/"
                target="_blank"
                className="text-white"
              >
                <FaFacebook size={20} />
              </a>
            </div>
    </div>
  )
}

export default Footer