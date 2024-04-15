import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './../Cards/DealCard/Card' 
import './styles.css';
import {Pagination, Navigation} from 'swiper/modules';

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={5}
                spaceBetween={10}
                modules={[Scrollbar]}
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    844:{
                        slidesPerView:3,
                        spaceBetween:20
                    },
                    928:{
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}

                // modules={[Pagination, Navigation]}
                className="mySwiper h-fit"
            >
                <SwiperSlide className=''><Card /></SwiperSlide>
                <SwiperSlide className=''><Card /></SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>

        </>
    );
}
