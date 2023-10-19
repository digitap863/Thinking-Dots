import React from 'react'
import video from '../../assets/About/video.png'

function TheShowreel() {
  return (
    <div className='flex my-20 flex-col items-center justify-center font-mont'>
        <h1 className='text-6xl font-extrabold'>The Showreel</h1>
        <img src={video} alt="" className='w-[60%] mt-10'/>
    </div>
  )
}

export default TheShowreel  