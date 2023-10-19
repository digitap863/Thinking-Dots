import React from 'react'
import img from '../../assets/Home/quote.png'

function Quote() {
  return (
    <div className='bg-black font-mont py-10 text-white flex gap-10 justify-center items-center my-20'>
        <div className='flex justify-end w-[20%]'>
            <img src={img} className='w-[80%]' alt="" />
        </div>
        <div className='w-[50%] flex flex-col items-start'>
            <h2 className='w-[85%] italic font-bold text-2xl'>Years living hath lights all from fifth all image deep. Fill likeness fly rule. Second beginning had likeness earth made, deep second.</h2>
            <h3 className='text-[#4FA1B2] font-semibold text-xl mt-8'>PAUL JEFFERSON</h3>
            <h5 className='text-sm mt-3'>Marketing Envato Pty Ltd.</h5>
        </div>
    </div>
  )
}

export default Quote