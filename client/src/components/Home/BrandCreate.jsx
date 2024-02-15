import React from 'react'
import image from '../../assets/Home/brandCreate.png'
import imageM from '../../assets/Home/brandCreateM.png'
import { Button } from '@nextui-org/react'

function BrandCreate() {
    return (
        <div className='flex flex-col lg:flex-row items-center px-8 lg:px-20 my-20 font-mont gap-5 lg:gap-0'>
            <img src={image} alt="" className='w-[65%] hidden lg:block'/>
            <img src={imageM} alt="" className='lg:hidden'/>
            <div className='lg:w-[35%] flex flex-col gap-4 text-[#5C5C5C] leading-[1.5rem] items-center lg:items-start'>
                <h2 className='font-bold text-4xl lg:text-3xl 2xl:text-5xl text-black'>Unique Solutions for You Business</h2>
                <p className='lg:w-[90%] xl:text-sm 2xl:text-base'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='lg:w-[90%] xl:text-sm 2xl:text-base'>{`Waters day of brought wherein night isn't night make
                    doesn't let appear unto thing light night.`}</p>
                <p className='lg:w-[90%] xl:text-sm 2xl:text-base'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='lg:w-[90%] xl:text-sm 2xl:text-base'>{`Fly place spirit second rule dry he herb green can't
                    created said forth seas light without female land
                    saw very years day him.`}</p>
                <p className='lg:w-[90%] xl:text-sm 2xl:text-base'>{`Fly place spirit second rule dry he herb green can't`}</p>
                <Button className='bg-black text-white rounded-none mt-5' size='lg'>VIEW PROJECTS</Button>
            </div>
        </div>
    )
}

export default BrandCreate