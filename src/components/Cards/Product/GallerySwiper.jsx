import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import {Pagination} from 'swiper/modules';
import {Navigation} from 'swiper/modules';

export default function App({images}) {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    images.map((image)=>(
                        <SwiperSlide key={image.id}>
                            <img src={image} alt={image.alt} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
