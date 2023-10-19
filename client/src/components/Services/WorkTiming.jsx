import React from 'react'
import image from '../../assets/Shared/worktiming.png'

function WorkTiming() {
  return (
    <div className='flex px-20 my-20 font-mont gap-10'>
    <img src={image} alt="" className='w-[60%]' />
    <div className='w-[40%] flex flex-col gap-4 text-[#5C5C5C] leading-[1.5rem] items-start'>
      <h2 className='font-bold text-5xl text-black'>TD at your Services</h2>
      <p className='w-[90%] text-justify'>Thinking Dots is an attentive, agile, and trustworthy digital marketing agency that offers an extensive range of services to businesses. We are in love with fresh ideas and this also drives our passion to launch our own products that add value to people and society. From web and mobile application design and development into e-commerce, content curation, PPC, SEO and social media management, we provide an integrated service to enhance your online marketing return and improve the top line <br /> <br /> Our products and services are modern, robust, and coherent and this is how we remain effective. We strongly believe that our success is intertwined with the success of businesses and people we serve. Hence, we understand your requirements and infuse our interaction with innovative concepts around strategy, technology, and creative design. By adopting this Wow & How approach, we turn your distinct needs into digital reality. We take pride in what we do and we hold high expectations for our work.</p>
    </div>
  </div>
  )
}

export default WorkTiming