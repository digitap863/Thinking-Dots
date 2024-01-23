import { Button, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import { showcases } from '../../assets/constant'

function Showcase() {
    return (
        <div className='font-mont my-20 flex flex-col items-center'>
            <h1 className='text-6xl font-extrabold text-center'>Showcase</h1>
            <div className='mx-2 lg:mx-40 mt-10'>
                <Tabs color='danger' className='' variant='light' radius='full' fullWidth  >
                    <Tab key="photos" title="ALL">
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="music" title="ILLUSTRATION">
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="design" title="DESIGN">
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'hidden'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="ui" title="UI/UX" className='hidden lg:block'>
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="production" title="PRODUCTION" className='hidden lg:block'>
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="web" title="WEB DESIGN" className='hidden lg:block'>
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="animation" title="ANIMATION" className='hidden lg:block'>
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab key="branding" title="BRANDING" className='hidden lg:block'>
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2 lg:gap-x-3'>
                            {showcases.map((elem,index) => (
                                <div className={`relative flex justify-center items-center flex-col ${index % 3 === 1 ? 'mt-5' : ''}`} key={elem.title}>
                                    <p className={`absolute bottom-16 ${index % 3 === 1 ? 'bottom-16' : 'bottom-24'} text-3xl font-semibold`}>|</p>
                                    <img src={elem.image} alt=""  className='mb-10 w-[90%] lg:w-auto'/>
                                    <p className='text-gray-400 text-sm '>{elem.subtitle}</p>
                                    <h5 className='font-bold text-lg lg:text-2xl mt-1'>{elem.title}</h5>
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <Button className='bg-black text-white rounded-none mt-10' size='lg'>SHOWCASE</Button>
        </div>
    )
}

export default Showcase