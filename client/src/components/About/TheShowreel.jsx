import React from 'react'
import video from '../../assets/About/video.png'

function TheShowreel() {
  return (
    <div className='flex my-10 lg:my-20 flex-col px-8 items-center justify-center font-mont'>
        <h1 className='text-[2.5rem] md:text-6xl font-extrabold'>The Showreel</h1>
        <img src={video} alt="" className='lg:w-[60%] mt-7 lg:mt-10'/>
    </div>
  )
}

export default TheShowreel  