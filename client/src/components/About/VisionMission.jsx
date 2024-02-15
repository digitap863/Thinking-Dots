import React from 'react'
import image from '../../assets/About/visionMission.png'
import imagem from '../../assets/About/visionMissionm.png'

function VisionMission() {
  return (
    <div className='flex flex-col items-center md:flex-row lg:px-20 md:px-5  my-10 lg:my-20 font-mont'>
      <img src={image} alt="" className='w-[65%] hidden lg:block' />
      <img src={imagem} alt="" className='md:w-[40%] lg:hidden' />
      <div className='lg:w-[35%] flex flex-col gap-5 mt-5 lg:gap-4 text-[#5C5C5C] leading-[1.5rem] px-8 md:px-2 lg:px-0 tems-start'>
        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-black'>Who are we ?</h2>
        <p className='lg:w-[90%] text-justify'>Thinking Dots is an attentive, agile, and trustworthy digital marketing agency that offers an extensive range of services to businesses. We are in love with fresh ideas and this also drives our passion to launch our own products that add value to people and society. From web and mobile application design and development into e-commerce, content curation, PPC, SEO and social media management, we provide an integrated service to enhance your online marketing return and improve the top line. Our products and services are modern, robust, and coherent and this is how we remain effective. We strongly believe that our success is intertwined with the success of businesses and people we serve. Hence, we understand your requirements and infuse our interaction with innovative concepts around strategy, technology, and creative design. By adopting this Wow & How approach, we turn your distinct needs into digital reality. We take pride in what we do and we hold high expectations for our work.</p>
      </div>
    </div>
  )
}

export default VisionMission