import React from 'react'
import image from '../../assets/Home/join.png'
import { Button } from '@nextui-org/react'

function JoinTD() {
    return (
        <div className='flex font-mont mt-32 gap-10 justify-center my-20'>
            <div className='w-[45%] flex justify-end'><img src={image} alt="" className='w-[80%]' /></div>
            <div className='flex flex-col justify-center items-start gap-4 w-[50%]'>
                <h1 className='text-7xl font-bold'>JOIN</h1>
                <h1 className='text-5xl font-semibold'>Hands With TD</h1>
                <p className='w-[80%]'>Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante tortor, vulputate sit amet arcu</p>
                <Button className='rounded-none bg-black text-white' size='lg'>CONNECT US</Button>
            </div>
        </div>
    )
}

export default JoinTD