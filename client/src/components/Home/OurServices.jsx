import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { services } from '../../assets/constant';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function OurServices() {
    return (
        <div className='flex flex-col my-20 items-center font-mont relative'>
            <h1 className='text-5xl lg:text-7xl font-extrabold tracking-wide'>Our Services</h1>
            <div className='w-[95%] lg:w-[80%] mt-16'>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    // spaceBetween={20}
                    // autoplay={{ delay: 1500 }}
                    loop={true} 
                    slidesPerView={3}
                   
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        nextEl: ".next-button",
                        prevEl: ".prev-button",
                        clickable: true,
                    }}
                    breakpoints={{
                        // For mobile view
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10, // Adjust spacing as needed
                        },
                        // For tablet and larger screens
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20, // Adjust spacing as needed
                        },
                      }}
                >
                    {services.map((elem) => (
                        <SwiperSlide key={elem.title} className='h-[23rem] lg:h-[30rem] relative flex justify-center'>
                            <div className='border-[2px] border-black pt-10 border-b-0 h-[20rem] lg:h-[25rem] absolute w-full lg:w-[80%] right-0 lg:right-[10%]'>
                                <h1 className='font-extrabold text-lg lg:text-2xl text-center'>{elem.title}</h1>
                            </div>
                            <div className='mt-20 h-[22rem] lg:h-[28rem] flex items-end  object-contain relative justify-center w-full'>
                                <img src={elem.image} alt="" className='w-full object-contain h-full' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='absolute text-4xl lg:text-6xl flex justify-end gap-3 lg:justify-between w-[90%] top-[105%] lg:top-[55%]'>
                <button className='prev-button'>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button className='next-button'>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
        </div>
    )
}

export default OurServices