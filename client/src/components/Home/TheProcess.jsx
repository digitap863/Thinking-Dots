import React from 'react'
import process from '../../assets/Home/process.png'
import { Accordion, AccordionItem } from '@nextui-org/react';

function TheProcess() {
    const defaultContent =
        "We will sit down, have a discussion, and listen to your concept and requirements. Often, the idea or needs are not fully completed; don’t worry we will help you formulate and refine the concept. The team will make suggestions to improve the outcome. We will adopt a Wow & How approach where we will enrich our discussions with innovative suggestions around strategy, technology, and creative design. Our topics will be driven by pre-prepared understanding of your business and by our collective experience. The goal will always be how to enable your business grow.";
    return (
        <div className='font-mont my-20'>
            <h1 className='text-center font-extrabold text-6xl'>The Process</h1>
            <div className='flex gap-16 items-cener mx-40 mt-16 justify-center'>
                <div className='flex flex-col items-start min-h-[30rem] w-[50%]'>
                    <h3 className='font-bold text-3xl w-[90%] mb-10'>OUR SERVICE PROCESS GUIDELINES</h3>
                    <Accordion
                   
                        motionProps={{
                            variants: {
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    height: "auto",
                                    transition: {
                                        height: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            duration: 1,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 1,
                                        },
                                    },
                                },
                                exit: {
                                    y: -10,
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        height: {
                                            easings: "ease",
                                            duration: 0.25,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 0.3,
                                        },
                                    },
                                },
                            },
                        }}
                    >
                        <AccordionItem  key="1" aria-label="Accordion 1" title="Listen and Guide">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Agree requirements">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Design and development">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title="Support">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <img className='w-[90%] mt-20' src={process} alt="" />
                </div>

            </div>
        </div>
    )
}

export default TheProcess