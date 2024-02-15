import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import einstein from '../../assets/Shared/Einstein.png'

function Footer() {
    return (
        <div className='font-mont px-10 lg:px-32 pt-10 pb-5 bg-[#1F1F1F] text-white overflow-hidden'>
            <div className='flex flex-col lg:flex-row justify-between pb-10 lg:pb-24 relative'>
                <img src={einstein} alt="" className='absolute bottom-[60%] md:bottom-[47%] lg:bottom-0 w-[60%] md:w-[35%] lg:w-[25%] 2xl::w-[33%] left-[60%] md:left-[60%] lg:left-[30%] 2xl:left-[25%]'/>
                <div className='lg:w-[40%] flex flex-col gap-2 lg:gap-0'>
                    <h1 className='text-4xl lg:text-6xl font-bold w-[70%] leading-tight lg:tracking-[0.2rem]'>WE SEEK FOR NEW</h1>
                    <h1 className='text-[1.6rem] lg:text-[2.3rem] lg:tracking-[0.4rem] font-bold'>ADVENTURES.</h1>
                    <h1 className='font-semibold text-[1.1rem] lg:text-[1.8rem] lg:tracking-[0.2rem]'>{`LET'S`} <span className='text-[#53ADC0]'>COLLABORATE</span></h1>
                    <h1 className='font-bold text-2xl lg:text-4xl mt-5 lg:mt-16'>THINKING DOTS</h1>
                    <div className='flex text-4xl lg:text-5xl lg:mt-6 gap-8 lg:gap-12'>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaYoutube /></a>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><BsFacebook /></a>
                        <a href="" className='hover:text-yellow-500 transition ease-in-out duration-300'><FaInstagram /></a>
                    </div>
                </div>
                <div className='lg:w-[42%] flex flex-col'>
                    <h1 className='text-2xl lg:text-5xl my-5 lg:my-10 font-semibold'>Get on our list</h1>
                    <Input label="Email" variant='bordered'  radius='none' className='bg-[#1F1F1F] rounded-none' color='' endContent={<Button variant='light' className='text-white text-4xl'><AiOutlineArrowRight /></Button>} />
                    <div className='flex mt-16 justify-between text-[#adacac]'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-sm lg:text-xl mb-6 text-white'>CONTACT</h3>  
                            <a className='text-tiny' href="mail:hello@thinkingdots.net">hello@thinkingdots.net</a>
                            <a className='text-tiny' href="tel:+91 9567 990 061">+91 9567 990 061</a>
                        </div>
                        <div className='pl-5'>
                            <h3 className='font-bold text-sm lg:text-xl mb-6 text-[#FFFFFF]'>TDOTS IDEAS HQ</h3>
                            <p className='text-tiny'>Nirmana Rd. 32 Building 123 <br />
                                Canggu, Bali</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] border-gray-500 w-full' />
            <div className='flex justify-between font-semibold text-sm lg:text-lg mt-8'>
                <h5>TD®, INC</h5>
                <h5 className='lg:-ml-28'>2023</h5>
                <h5 className='lg:mr-20'>WEB DESIGN BY TD</h5>
                <div className='gap-16 hidden lg:flex'>
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