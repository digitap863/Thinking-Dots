import React from 'react'
import { services } from '../../assets/constant'
import { useNavigate } from 'react-router-dom'

function ServicesGrid() {
  const navigate = useNavigate()
  return (
    <div className='my-10 lg:my-20 lg:mx-40 font-mont'>
      <h1 className='font-extrabold text-center mb-10 lg:mb-20 text-5xl lg:text-7xl'>Our Services</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3  lg:gap-y-5 '>
        {
          services.map((elem) => (
            <div key={elem.title} className='relative flex justify-center transition-all hover:-translate-y-2 duration-500 ease-in-out' onClick={()=>navigate('/service-details',{state:elem.data})}> 
              <div className='border-[2px] border-black pt-10 border-b-0 h-[23rem] lg:h-[25rem] absolute w-[88%] lg:w-[85%] right-[5%]'>
                <h1 className='font-extrabold text-xl lg:text-2xl text-center'>{elem.title}</h1>
              </div>
              <div className='lg:mt-20 h-[28rem] flex items-end  object-contain relative justify-center w-full'>
                <img src={elem.image} alt="" className='w-full object-contain h-full' />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ServicesGrid