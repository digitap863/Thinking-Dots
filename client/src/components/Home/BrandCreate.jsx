import React from 'react'
import image from '../../assets/Home/brandCreate.png'
import { Button } from '@nextui-org/react'

function BrandCreate() {
    return (
        <div className='flex px-20 my-20 font-mont gap-'>
            <img src={image} alt="" className='w-[65%]'/>
            <div className='w-[35%] flex flex-col gap-4 text-[#5C5C5C] leading-[1.5rem] items-start'>
                <h2 className='font-bold text-5xl text-black'>Unique Solutions for You Business</h2>
                <p className='w-[90%]'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='w-[90%]'>{`Waters day of brought wherein night isn't night make
                    doesn't let appear unto thing light night.`}</p>
                <p className='w-[90%]'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='w-[90%]'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='w-[90%]'>{`Fly place spirit second rule dry he herb green can't`}</p>
                <Button className='bg-black text-white rounded-none mt-5' size='lg'>VIEW PROJECTS</Button>
            </div>
        </div>
    )
}

export default BrandCreate