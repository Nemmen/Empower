import React from 'react'
import Button from './Button'
import Hero from '../svgs/5.svg'
import AyurCards from './AyurCards'
import Oneself from './Oneself'

const Ayurveda = () => {
  return (
    <div>
      <div className="flex w-[87%] justify-center items-center m-auto lg:h-[100vh] md:h-[100vh] sm:h-[100vh]">
        <div className="flex gap-5 flex-wrap-reverse w-full sm:px-0  px-3 sm:mt-0 justify-center sm:flex-nowrap items-center">
          <div className="lg:w-[50%] md:w-[50%]">
            <h1 className=" text-[40px] font-bold leading-10">
            Welcome to 
              <br /><span className="text-[48px]" style={{ color: "#6964fa" }}>Empower</span><span className="text-black text-[48px]">Mend</span>
            </h1>
            <hr className="block h-[2px] bg-violet-950"/>
            <br />
            <p className="font-medium ">
            A <span className="text-[#6964fa]">supportive community</span> dedicated to healing and empowerment for survivors of abuse and harassment. 
            <br/>
            <br/>
            <span className="font-normal">Join us in breaking the silence, finding strength in solidarity, and reclaiming hope for a brighter future.</span>
            </p>
            <br/>
            <Button style="text-[18px]" name="Know us" />
          </div>
          <div className="lg:w-[50%] md:w-[50%]">
            <img
            src={Hero}
            className="object-contain"
            alt=""
          />
          </div>
          
        </div>
      </div>
      <div className="spacer p-6"></div>
      <AyurCards/>
      <div className="spacer p-6"></div>
      <Oneself/>
      <div className="spacer p-6"></div>
    </div>
  )
}

export default Ayurveda