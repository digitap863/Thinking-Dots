import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import einstein from '../../assets/Shared/Einstein.png'

function Footer() {
    return (
        <div className='font-mont px-32 pt-10 pb-5 bg-[#1F1F1F] text-white'>
            <div className='flex justify-between pb-24 relative'>
                <img src={einstein} alt="" className='absolute bottom-0 w-[33%] left-[25%]'/>
                <div className='w-[40%]'>
                    <h1 className='text-6xl font-bold w-[70%] leading-tight tracking-[0.2rem]'>WE SEEK FOR NEW</h1>
                    <h1 className='text-[2.3rem] tracking-[0.4rem] font-bold'>ADVENTURES.</h1>
                    <h1 className='font-semibold text-[1.8rem] tracking-[0.2rem]'>{`LET'S`} <span className='text-[#53ADC0]'>COLLABORATE</span></h1>
                    <h1 className='font-bold text-4xl mt-16'>THINKING DOTS</h1>
                    <div className='flex text-5xl mt-6 gap-12'>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaYoutube /></a>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><BsFacebook /></a>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaInstagram /></a>
                    </div>
                </div>
                <div className='w-[42%] flex flex-col'>
                    <h1 className='text-5xl my-10 font-semibold'>Get on our list</h1>
                    <Input label="Email" variant='bordered' radius='none' size='lg' className='bg-[#1F1F1F] rounded-none' color='' endContent={<Button variant='light' className='text-white text-4xl'><AiOutlineArrowRight /></Button>} />
                    <div className='flex mt-16 justify-between text-[#adacac]'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-xl mb-6 text-white'>CONTACT</h3>
                            <a href="mail:hello@thinkingdots.net">hello@thinkingdots.net</a>
                            <a href="tel:+91 9567 990 061">+91 9567 990 061</a>
                        </div>
                        <div >
                            <h3 className='font-bold text-xl mb-6 text-[#FFFFFF]'>TDOTS IDEAS HQ</h3>
                            <p>Nirmana Rd. 32 Building 123 <br />
                                Canggu, Bali</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] border-gray-500 w-full' />
            <div className='flex justify-between font-semibold text-lg mt-8'>
                <h5>td®, inc</h5>
                <h5 className='-ml-28'>2023</h5>
                <h5 className='mr-20'>WEB DESIGN BY TD</h5>
                <div className='flex gap-16'>
                    <a href="/">BASE</a>
                    <a href="/about">WE/US</a>
                    <a href="/service">SERVICE</a>
                    <a href="">SHOWCASE</a>
                </div>
            </div>
        </div>
    )
}

export default Footer