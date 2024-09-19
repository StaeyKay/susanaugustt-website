import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../src/styles.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { ownThatStage, slider1 } from '../assets'
import Navbar from './navbar'

const Hero = () => {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {/* <div className="relative h-full"> */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
            <img src={slider1} alt="first slider image" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold">SLIDE SHOW CAPTION GOES HERE</h1>
                <p className="mt-2">EXTRA TEXT</p>
                <button className="mt-4 px-6 py-3 bg-[#916c06] text-white font-bold">CALL TO ACTION</button>
              </div>
            </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute inset-0 bg-black opacity-30"></div>
            <img src={ownThatStage} alt="first slider image" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold">SLIDE SHOW CAPTION GOES HERE</h1>
                <p className="mt-2">EXTRA TEXT</p>
                <button className="mt-4 px-6 py-3 bg-[#916c06] text-white font-bold">CALL TO ACTION</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide><img src={slider1} alt="first slider image" /></SwiperSlide>
      </Swiper>
     </div>
  )
}

export default Hero