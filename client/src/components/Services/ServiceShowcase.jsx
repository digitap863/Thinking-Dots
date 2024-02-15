import React from 'react'

function ServiceShowcase({ data }) {
    return (
       data&& <div className='font-mont mt-10 lg:mt-28'>
            <h1 className='text-4xl lg:text-5xl text-center mb-6 font-bold '>{data?.title}</h1>
            <div className='grid grid-cols-2 mx-3 lg:grid-cols-3 gap-y-10 gap-x-3 lg:mx-40'>
                {data?.elements?.map((elem, index) => (
                    <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                        <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                        <img src={elem.image} alt="" className='mb-10' />
                        <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                        <h5 className='font-bold lg:text-2xl mt-1'>{elem.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceShowcase