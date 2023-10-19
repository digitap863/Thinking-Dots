import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Navbar from '../shared/Navbar'
import chaplin from '../../assets/headerImages/Chaplin.png'
import { Button } from '@nextui-org/react';
import ball from '../../assets/headerImages/ball.png'
import '../shared/style.css'

function Header() {
    return (
        <div className='h-screen relative font-mont flex flex-col'>
            <Navbar />
            <div className='w-full'>
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        className='flex'
                        spaceBetween={45}
                        autoplay={{ delay: 1500 }}
                        loop={true}
                    >
                        <SwiperSlide className='w-full'>
                            <div className='flex'>
                                <div className='w-[50%] flex flex-col pl-40 justify-start mt-20 gap-3 items-start'>
                                    <h5 className='font-bold text-xl tracking-[.7rem]'>AGANCY STUDIO</h5>
                                    <h1 className='text-[6.5rem]  font-extrabold tracking-wider leading-none w-[50%] headerText'>ILLUST RATION<span className='text-[#33CCEE]'>.</span></h1>
                                    <p className='text-xl text-gray-400 tracking-widest w-[60%] leading-9'>TimePieces that make a statement</p>
                                    <Button className='bg-black text-white rounded-none mt-5' size='lg'>VIEW PROJECTS</Button>
                                </div>
                                <div className='w-[50%] relative flex justify-start'>
                                    <img src={ball} alt="" className='absolute z-[-1] w-auto lg:w-[70%] 2xl:w-auto right-[30%]'/>
                                    <img src={chaplin} alt=""  className='w-[75%] lg:w-[70%] 2xl:w-[75%]'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* <button className='flex items-center gap-2 mt-10 w-44 bg-[#EAB600] text-white py-3 hover:bg-[#e4ff4d] hover:text-gray-500 transition ease-in-out duration-300 px-5 rounded-xl  font-semibold'>Know More <ChevronDoubleRightIcon className='w-5' /></button> */}
            </div>
        </div>
    )
}

export default Header