
import React from 'react';
import Accordian from './../Accordian'
const FAQ = () => {
    return (
        // <div className='flex justify-center align-middle w-[75%] text-left m-auto'>
           <div className='container mx-auto'>
            <div className='justify-center align-middle w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-2xl lg:text-5xl font-bold mb-2 md:mb-35'>Frequently asked Question's</h1>
                </div>
                <div className='w-full p-3'>
                    <Accordian />
                </div>
            </div>

        </div>
    );
};

export default FAQ;