import React from 'react'
import image from '../../assets/Home/join.png'
import { Button } from '@nextui-org/react'

function JoinTD() {
    return (
        <div className='flex flex-col-reverse items-cent md:flex-row font-mont gap-10 md:gap-0  lg:gap-10 justify-center my-20'>
            <div className=' lg:w-[45%] flex justify-center md:justify-end px-7 md:px-0 md:pl-7 lg:pl-0 lg:px-7'><img src={image} alt="" className='md:w-auto lg:w-[80%]' /></div>
            <div className='flex flex-col px-7 justify-center items-start gap-4 md:gap-1 lg:gap-4 lg:w-[50%]'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>JOIN</h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Hands With TD</h1>
                <p className='lg:w-[80%]'>Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante tortor, vulputate sit amet arcu</p>
                <Button className='rounded-none bg-black text-white' size='lg'>CONNECT US</Button>
            </div>
        </div>
    )
}

export default JoinTD