import React from 'react'
import Headers from '../components/headers'
import { aboutImg } from '../assets'

const About = () => {
  return (
    <div className='flex flex-col px-10 py-12 md:flex-row md:py-10 gap-10 items-center'>
        <div className='md:w-1/2'>
            <img className='w-full h-auto object-cover' src={aboutImg} alt="image of Susan Augustt" />
        </div>
        <div className="md:w-1/2 space-y-6">
            <Headers sectionTitle="SUSAN AUGUSTT"/>
            <p className='text-justify'>Susan Augustt is an abundantly gifted singer and live performer who moves seamlessly
                between genres and styles. She creates neo-afro soul pieces poignantly blended with
                indigenous Ghanaian rhythms that influence her fuse with the soul, lending their
                parts in the crafting of a unique live sound that takes listeners on a satisfying
                journey of culture and taste. Susan is born of Ga-Ewe descent and lived her early
                years in Obuasi, a suburb of the Ashanti Region in Ghana; she believes these 
                multi-culture experiences have contributed to her versatility in her music. Apart
                from English, she sings in two local languages, Twi and Ga. If one thing is 
                certain it is the fact that Susan is a live music artiste who would embrace 
                every chance to light up a stage with her performance and music and can rekindle
                the much-lacking live music scene in our parts. One song from her EP is a song
                titled “Obaa”; which is an ode to all hardworking women who break all boundaries
                to make their dreams come true and she hopes to become an inspiration to many
                more. This defines Susan Augustt. Susan is indeed made in Ghana but set for
                the World stage. She has won a MusicInAfrica Showcase Grant and also collaborated
                with many organizations such as Future Star Charity on their “Periods of Change”
                project which aimed to provide menstrual hygiene education and support to girls.
                She has also performed at Afrofest Toronto, Ahaban Charity Festival, Library of
                Africa and the African Diaspora, and Sofar Sounds Accra. Currently, she has just
                completed a One Beat Ghana residency program that brought artists 11 artists
                and creative entrepreneurs together from throughout Ghana, Nigeria and the U.S
                for a 2 week collaboration to exchange and build strategies for stronger artist communities
                and creative economies in Ghana. She is currently working on launching her project 
                from this residency in 2024.
            </p>
        </div>
    </div>
  )
}

export default About