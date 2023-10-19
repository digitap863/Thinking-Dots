import React from 'react'
import mc from '../../assets/headerImages/mc.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import logo from '../../assets/Home/LOGO.png'
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Attention() {
    return (
        <div className='font-mont mx-20'>
            <h1 className='text-center font-extrabold text-6xl'>Attention Please!!</h1>
            <div className='flex justify-center gap-10'>
                <div className='w-[30%] flex justify-end items-center'>
                    <img src={mc} alt="" className='w-[95%]' />
                </div>
                <div className='w-[50%] flex flex-col justify-center relative'>
                    <h5 className='text-xl text-gray-500'>{`Who we've working with`}</h5>
                    <h1 className='text-4xl font-bold mb-16'>Awesome Partners</h1>
                    <div>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Autoplay, Navigation]}
                            spaceBetween={20}
                            autoplay={{ delay: 3500 }}
                            loop={true}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".next-button2",
                                prevEl: ".prev-button2",
                                clickable: true,
                            }}
                        >
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='relative flex justify-center bg-red-00 w-full'>
                                <div className='grid grid-cols-4 gap-x-16 gap-y-20 grid-rows-2'>
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                    <img src={logo} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='absolute text-5xl flex justify-between w-[15%] bottom-[7%]'>
                        <button className='text-4xl prev-button2 cursor-pointer'>
                            <AiOutlineArrowLeft />
                        </button>
                        <button className='next-button2 cursor-pointer'>
                            <BsFillArrowRightCircleFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attention