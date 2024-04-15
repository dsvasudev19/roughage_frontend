import React from 'react'
import Header1 from './Headers/Header1'
import Swiper from './Swiper/Swiper'
const DealsDay = () => {
    return (
        <div className="h-fit m-3">
            <Header1 title="Deals of the Day" />
            <Swiper />
        </div>
    )
}

export default DealsDay;