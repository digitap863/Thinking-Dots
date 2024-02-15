import React from 'react'

function ServicesRow({data}) {
  return (
    data&&<div className='lg:flex flex-col hidden font-mont  gap-16 items-center'>
        <h1 className='text-6xl font-extrabold'>{data?.heading}</h1>
        <div className='flex justify-center border-black border-[2px] py-8 px-20 gap-16'>
        {
            data?.images?.map((elem)=>(
                <img src={elem.image} alt="" className='w-40 h-40 object-contain' key={elem.image}/>
            ))
        }
    </div>
    </div>
  )
}

export default ServicesRow