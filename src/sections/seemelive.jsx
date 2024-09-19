import React from 'react';
import Headers from '../components/headers';
import { seeMeLive1, seeMeLive2, seeMeLive3 } from '../assets'; // Make sure this path is correct
import Subheaders from '../components/subheaders';

const Seemelive = () => {
  return (
    <div className='space-y-7 px-5 md:px-10 pb-10'>
      {/* Section Header */}
      <div className="text-center">
        <Headers sectionTitle="SEE ME LIVE" />
      </div>

      {/* Grid Layout for the Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {/* First Card */}
        <article className="overflow-hidden shadow-2xl transition hover:shadow-lg">
          <img
            alt="Detty Wave Concert"
            src={seeMeLive1}
            className="h-56 w-full object-cover"
          />
          <div className="bg-[#f8f2ec] p-4 sm:p-6">
            <Subheaders subHeader="DETTY WAVE CONCERT" />
            <p className="mt-2 text-sm/relaxed">
              24TH MAY 2024
            </p>
            <p className="text-sm/relaxed">
              Location: Accra central part
            </p>
          </div>
        </article>

        {/* Second Card */}
        <article className="overflow-hidden shadow-2xl transition hover:shadow-lg">
          <img
            alt="Detty Wave Concert"
            src={seeMeLive2}
            className="h-56 w-full object-cover"
          />
          <div className="bg-[#f8f2ec] p-4 sm:p-6">
            <Subheaders subHeader="DETTY WAVE CONCERT" />
            <p className="mt-2 text-sm/relaxed">
              24TH MAY 2024
            </p>
            <p className="text-sm/relaxed">
              Location: Accra central part
            </p>
          </div>
        </article>

        {/* Third Card */}
        <article className="overflow-hidden shadow-2xl transition hover:shadow-lg">
          <img
            alt="Detty Wave Concert"
            src={seeMeLive3}
            className="h-56 w-full object-cover"
          />
          <div className="bg-[#f8f2ec] p-4 sm:p-6">
            <Subheaders subHeader="DETTY WAVE CONCERT" />
            <p className="mt-2 text-sm/relaxed">
              24TH MAY 2024
            </p>
            <p className="text-sm/relaxed">
              Location: Accra central part
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Seemelive;
