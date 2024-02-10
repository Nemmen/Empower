import React from 'react';
import ScrollCarousel from 'scroll-carousel-react'
import responseArr from './ScrollResponse';

const ScrollCarousell = () => {
  return (
    <div>
        <ScrollCarousel 
        autoplay
        autoplaySpeed={1}
        speed={2}>
            {responseArr.map((resp,index)=>(
                <div key={index} className='p-3 w-[300px] h-[425px] flex flex-col gap-5 mt-2 rounded-md shadow-xl hover:border-b-4 hover:border-[#6964fa] transition-all duration-200 mb-7'>
                    <div className='m-auto'><img src={resp.img} className='object-contain w-[110px] h-[110px]'  alt="" /></div>
                    <div className='text-center font-bold text-[20px]'><h3>{resp.heading}</h3></div>
                    <div><p className='text-center text-balance text-[14px] h-[110px]'>{resp.content}</p></div>
                </div>
            ))}
        </ScrollCarousel>
    </div>
  )
}

export default ScrollCarousell