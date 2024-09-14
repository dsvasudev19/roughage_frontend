import React from 'react'
import Header1 from './Headers/Header1'
import Swiper from './Swiper/Swiper'
import Card from './Cards/DealCard/Card3'


const DealsDay = () => {
    return (
        <div className="">
            <Header1 title="Deals of the Day" />
            <div className='flex py-8 overflow-x-scroll gap-6'>
                {
                    Array.from({length:15}).map((_,index)=>(
                            <Card />
                    ))
                }
            </div>
        </div>
    )
}

export default DealsDay;