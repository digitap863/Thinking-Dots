import React from 'react'
import img from '../../assets/Home/quote.png'

function Quote() {
  return (
    <div className='bg-black font-mont py-10 text-white flex gap-5 lg:gap-10 justify-center items-center my-10 lg:my-20'>
        <div className='flex justify-end w-[20%]'>
            <img src={img} className='lg:w-[80%]' alt="" />
        </div>
        <div className='w-[70%] lg:w-[50%] flex flex-col  items-start'>
            <h2 className='w-[95%] lg:w-[85%] italic lg:font-bold text-tiny md:text-base lg:text-2xl'>Years living hath lights all from fifth all image deep. Fill likeness fly rule. Second beginning had likeness earth made, deep second.</h2>
            <h3 className='text-[#4FA1B2] font-semibold text-[0.8rem] md:text-base lg:text-xl mt-2 lg:mt-8'>PAUL JEFFERSON</h3>
            <h5 className='text-[0.5rem] lg:text-sm mt-1 lg:mt-3'>Marketing Envato Ptd Ltd.</h5>
        </div>
    </div>
  )
}

export default Quote