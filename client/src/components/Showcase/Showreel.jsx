import React from 'react'
import image from '../../assets/About/video.png'

function Showreel() {
  return (
    <div className='flex px-20  items-center my-20 font-mont gap-14'>
    <div className='w-[60%]'>
        <h1 className='font-extrabold text-6xl'>SHOW<span className='text-[#53ADC0]'>REEL</span></h1>
    <img src={image} alt="" className='w-full' />
    </div>
    <div className='w-[40%] flex flex-col gap-4 text-[#5C5C5C] leading-[1.5rem] items-start'>
      <h2 className='font-bold text-5xl text-black'>Its Show Time!</h2>
      <p className='w-[90%] text-justify'>Thinking Dots is an attentive, agile, and trustworthy digital marketing agency that offers an extensive range of services to businesses. We are in love with fresh ideas and this also drives our passion to launch our own products that add value to people and society. From web and mobile application design and development into e-commerce, content curation, PPC, SEO and social media management, we provide an integrated service to enhance your online marketing return and improve the top line <br /> <br /> Thinking Dots is an attentive, agile, and trustworthy digital marketing agency that offers an extensive range of services to businesses. We are in love with fresh ideas and this also drives our passion to launch.</p>
    </div>
  </div>
  )
}

export default Showreel