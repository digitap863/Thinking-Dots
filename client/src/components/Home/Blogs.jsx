import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import blog1 from '../../assets/Home/blog1.png'
import blog2 from '../../assets/Home/blog2.png'
import blog3 from '../../assets/Home/blog3.png'
import '../shared/style.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

function Blogs() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className='flex flex-col font-mont items-center relative my-20'>
      <h1 className='text-6xl font-extrabold'>{path==='/blogs'||path==='/blog-details'?'Popular Blogs':'Blogs'}</h1>
      <div className='w-[85%] mt-16'>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            loop={true}
            slidesPerView={3}
            navigation={{
              nextEl: ".next-button2",
              prevEl: ".prev-button2",
              clickable: true,
            }}
          >
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog1})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog2})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog3})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog3})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog1})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative flex justify-center bg-red-00'>
              <div className='w-[30rem] flex flex-col justify-between items-start p-4 font-mont border-black border-[3px] rounded-3xl' style={{ backgroundImage: `url(${blog2})` }}>
                <div className='bg-white p-1 rounded-md'>Marketing</div>
                <h5 className='font-semibold text-white mt-28'>Loream ipsum is simpy dummy text of printing and .</h5>
                <p className='text-white text-tiny mt-4'>Nov 29 . 10 Min Read</p>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      <div className='absolute text-5xl flex justify-between w-[95%] top-[60%]'>
                <button className='prev-button2 cursor-pointer'>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button className='next-button2 cursor-pointer'>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
    </div>
  )
}

export default Blogs