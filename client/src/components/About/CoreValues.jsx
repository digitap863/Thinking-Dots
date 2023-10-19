import React from 'react'
import core1 from '../../assets/About/core1.png'
import core2 from '../../assets/About/core2.png'

function CoreValues() {
    return (
        <div className='font-mont flex flex-col items-center my-40'>
            <h1 className='text-6xl text-center font-extrabold'>Core values</h1>
            <div className='flex justify-center mt-16 gap-10'>
                <div className='flex w-[40%] gap-5'>
                    <img src={core1} alt="" className='w-[28%]'/>
                    <div>
                        <h5 className='mb-3 font-extrabold text-2xl'>MISSION</h5>
                        <p className='text-sm font-[500]'>To enable businesses to grow by using our effective digital marketing services, and people to be satisfied by finding convenience, fun and value in our online products.</p>
                    </div>
                </div>
                <div className='flex w-[40%] gap-5'>
                    <img src={core2} alt="" className='w-[28%]'/>
                    <div>
                        <h5 className='mb-3 font-extrabold text-2xl'>VISION</h5>
                        <p className='text-sm font-[500]'>To be recognised for our contribution to the digital economy and for value we bring to business and society.</p>
                    </div>
                </div>        </div>
        </div>
    )
}

export default CoreValues