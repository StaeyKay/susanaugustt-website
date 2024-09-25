import React from 'react';
import Headers from '../components/headers';
import Subheaders from '../components/subheaders';
import { latestTrack1 } from '../assets'; // Make sure this path is correct
import { FiYoutube } from 'react-icons/fi';
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaBandcamp } from "react-icons/fa";

const Tracks = () => {
  return (
    <div className="p-10 space-y-10">
      {/* Section Header */}
      <div className="text-center">
      <Headers sectionTitle="LATEST TRACKS" />
      </div>

      {/* Track Item */}
      <div className="md:flex justify-between items-center space-y-5 md:space-y-0">
        {/* Image and Track Details */}
        <div className="md:flex md:items-center space-y-4 md:space-y-0 md:gap-7">
          {/* Track Image */}
          <div className="p-4 md:p-0">
          <img 
            className="w-full md:w-40 h-auto md:h-40 object-cover" 
            src={latestTrack1} 
            alt="sexy depression thumbnail" 
          />
          </div>
          
          {/* Track Title and Date */}
          <div className="px-4 md:px-0 text-center md:text-left space-y-1">
            <Subheaders subHeader="SEXY DEPRESSION" />
            <p className="text-sm">24th May, 2024</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="https://www.youtube.com/watch?v=ZOsxb5kt8wI" target='blank'> <FiYoutube size={30} /></a>
          <a href="https://open.spotify.com/album/7dReE7L2OUuf0mhyNZyg9l" target='blank'><FaSpotify size={30} /></a>
          <a href="https://music.apple.com/us/artist/susan-augustt/"><SiApplemusic size={30} /></a>
          <a href="https://susanaugustt.bandcamp.com/album/effects-ep"><FaBandcamp size={30} /></a>
        </div>
      </div>

      {/* Second Track Item */}
      <div className="md:flex justify-between items-center space-y-5 md:space-y-0">
        {/* Left Side: Image and Track Details */}
        <div className="md:flex md:items-center space-y-4 md:space-y-0 md:gap-7">
          {/* Track Image */}
          <div className="p-4 md:p-0">
          <img 
            className="w-full md:w-40 h-auto md:h-40 object-cover" 
            src={latestTrack1} 
            alt="sexy depression thumbnail" 
          />
          </div>
          
          {/* Track Title and Date */}
          <div className="px-4 md:px-0 text-center md:text-left space-y-1">
            <Subheaders subHeader="PHILOMENA" />
            <p className="text-sm">24th May, 2024</p>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="https://www.youtube.com/watch?v=7eRfcCh4s2c" target='blank'><FiYoutube size={30} /></a>
          <a href="https://open.spotify.com/album/7dReE7L2OUuf0mhyNZyg9l" target='blank'><FaSpotify size={30} /></a>
          <a href="https://music.apple.com/us/artist/susan-augustt/"><SiApplemusic size={30} /></a>
          <a href="https://susanaugustt.bandcamp.com/album/effects-ep"><FaBandcamp size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
