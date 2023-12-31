import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '@nextui-org/react'

function CHeader({image,title}) {
    return (
        <div className={`${title?'h-screen':''} relative font-mont flex flex-col`}>
            <Navbar />
            {title&&<div className='w-full'>
                <div className='flex justify-start gap-12'>
                    <div className='w-[50%] flex flex-col pl-40 justify-center gap-3 items-start'>
                        <h5 className='font-bold text-xl tracking-[.7rem]'>AGANCY STUDIO</h5>
                        <h1 className='text-[6.5rem]  font-extrabold mb-16 tracking-wider leading-none w-[50%] headerText'>{title}<span className='text-[#33CCEE]'>.</span></h1>
                        <p className='text-xl text-gray-400 tracking-widest w-[60%] leading-9'>TimePieces that make a statement</p>
                        <Button className='bg-black text-white rounded-none mt-5' size='lg'>VIEW PROJECTS</Button>
                    </div>
                    <div className='2xl:w-[35%] relative flex justify-end'>
                        {/* <img src={ball} alt="" className='absolute z-[-1] right-[30%]'/> */}
                        <img src={image} alt="" className='w-[73%]  2xl:w-[87%]' />
                    </div>
                </div>

                {/* <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button> */}
            </div>}
        </div>
    )
}

export default CHeader