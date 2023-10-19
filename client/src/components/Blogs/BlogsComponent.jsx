import React from 'react'
import image from '../../assets/Shared/blogImaghe.png'
import { Button } from '@nextui-org/react'

function BlogsComponent() {
    const arr = [
        {
            image: image,
            subtitle1: 'BRANDING',
            title: 'get some weight off feet.',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            doeiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam quis nostrud.`,
        },
        {
            image: image,
            subtitle1: 'BRANDING',
            title: 'get some weight off feet.',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            doeiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam quis nostrud.`,
        },
        {
            image: image,
            subtitle1: 'BRANDING',
            title: 'get some weight off feet.',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            doeiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam quis nostrud.`,
        },
        {
            image: image,
            subtitle1: 'BRANDING',
            title: 'get some weight off feet.',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            doeiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam quis nostrud.`,
        },

        {
            image: image,
            subtitle1: 'BRANDING',
            title: 'get some weight off feet.',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            doeiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam quis nostrud.`,
        },

    ]
    function convertToTwoDigit(number) {
        number = parseInt(number);
        if (number >= 0 && number < 10) {
            return '0' + number;
        } else {
            return number.toString();
        }
    }
    return (
        <div className='flex font-mont mx-24 flex-col items-center'>
            <h1 className='text-6xl mb-16 font-extrabold'>Blogs</h1>
            {arr.map((elem, index) => (
                index % 2 === 0 ?
                    <div className='flex justify-center gap-10 items-center my-5 hover:shadow-xl transition ease-in-out duration-400' key={index}>
                        <div className='w-[50%] flex flex-col justify-center items-start pl-10 relative'>
                            <p className='absolute text-[22rem] font-extrabold text-gray-500 opacity-[0.15] left-[15%] -bottom-[30%] z-[-1]'>{convertToTwoDigit(index+1)}</p>
                            <h5 className='font-bold'>{elem.subtitle1}</h5>
                            <h1 className='font-bold text-5xl w-[80%] tracking-wide leading-tight mb-5'>{elem.title}</h1>
                            <p className='w-[80%] mb-10'>{elem.content}</p>
                            <Button size='md' className='bg-black text-white rounded-none'>VIEW PROJECT</Button>
                        </div>
                        <img src={image} alt="" className='w-[45%]' />
                    </div>
                    :
                    <div className='flex justify-center gap-10 items-center my-5 hover:shadow-xl transition ease-in-out duration-400' key={index}>
                        <img src={image} alt="" className='w-[45%]' />
                        <div className='w-[50%] flex flex-col justify-center items-start pl-10 relative'>
                        <p className='absolute text-[22rem] font-extrabold text-gray-500 opacity-[0.15] left-[15%] -bottom-[30%] z-[-1]'>{convertToTwoDigit(index+1)}</p>
                            <h5 className='font-bold'>{elem.subtitle1}</h5>
                            <h1 className='font-bold text-5xl w-[80%] tracking-wide leading-tight mb-5'>{elem.title}</h1>
                            <p className='w-[90%] mb-10'>{elem.content}</p>
                            <Button size='md' className='bg-black text-white rounded-none'>VIEW PROJECT</Button>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default BlogsComponent