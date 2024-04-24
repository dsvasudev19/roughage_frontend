import React from 'react'
import Carousel from './Carousels/Carousel'
const Poster=()=>{
    return (
        <div className='block lg:flex justify-center gap-3 rounded-xl mt-5'>
            <div id='carouselDiv' className='bg-red-300 h-[50vh] lg:h-[60vh] w-[100%] lg:w-[60%] mb-3 md:mt-0 rounded-xl'>

                <Carousel /> 
            </div>
            <div id='twoSmallDivs' className='h-[50vh] lg:h-[60vh] w-[100%] lg:w-[40%] rounded-xl'>
                <div id='smallOne' className='bg-cyan-900 h-[48%] rounded-xl mb-4 overflow-hidden'>
                          <img src='/ecommerce1.jpg' alt='banner image 1' className='h-full w-full rounded-xl' />
                </div>
                
                <div id='smallTwo' className='bg-red-900 h-[48%] rounded-xl mt-5 object-contain overflow-hidden'>
                    <img src='/6222149bfbdb5b0645ae4c0e_eCommerce-Website-Components-photo.jpeg' alt='banner image 2' className='h-full w-full rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default Poster;