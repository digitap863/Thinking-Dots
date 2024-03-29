import { Button } from '@nextui-org/react'
import React from 'react'
// import image from '../../assets/Shared/worktiming.png'

function ComponentTwo({data}) {
  return (data&&
    <div className='flex flex-col lg:flex-row lg:px-20 my-10 lg:my-20 font-mont gap-5 items-center lg:gap-10'>
    <img src={data?.image} alt="" className='w-[90%] lg:w-[60%]' />
    <div className='lg:w-[40%] flex flex-col gap-4 text-[#5C5C5C] leading-[1.5rem] items-center lg:items-start'>
      <h2 className='font-bold text-5xl text-black'>{data?.title}</h2>
      <div className='flex flex-col items-center'>
        {data?.content?.map((elem)=>(
            <p key={elem.text} className='w-[90%] text-justify my-4'>{elem?.text}</p>
        ))}
      </div>
      <Button className='bg-black text-white rounded-none'>VIEW PROJECT</Button>
    </div>
  </div>
  )
}

export default ComponentTwo