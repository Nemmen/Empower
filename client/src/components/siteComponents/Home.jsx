import React from "react";
import Button from "./Button";

import Hero from '../svgs/5.svg'
import about from '../svgs/14.svg'

import SimpleSlider from "./Slider";
import Card from "./Card";
import ScrollCarousell from "./ScrollCarousel";
import AyurHome from "./AyurHome";

const Home = () => {
  return (
    <section className='scroll-smooth'>
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
      <div className="spacer p-4"></div>
      <div className=" w-full text-center bg-[#ffe5f9] rounded-[20px]  lg:h-[100vh] py-6" >
          
          <div className="text-center p-10">
            <h2 className="text-[#6964fa] font-bold text-4xl">Empower<span className="text-black">Mend</span> <span className="text-black">is More Than a Platform</span></h2>
          </div>
          
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
              
              <div className="lg:w-[76%] md:w-[80%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
                <img src={about} alt="" className="object-center object-contain rounded-full " />
              </div>

              <div className="my-auto lg:w-[76%]">
                <p className="lg:text-[16px] lg:ps-16 py-2 lg:text-start text-balance md:text-start sm:text-center "><span className="text-[16px] font-semibold text-[#6964fa]">It's a lifeline</span> for those who have endured the pain of abuse and harassment. Our mission is to provide a nurturing environment where survivors can find understanding, guidance, and the strength to heal.
                </p>
                <br />
                
                <p className="text-balance lg:ps-16 lg:text-start lg:text-[16px] md:text-start sm:text-center ">
                We believe in the power of community, compassion, and holistic healing approaches to support survivors on their path to recovery.
                </p>
              </div>
            </div>
          </div>
      </div>
    <div className="spacer p-4"></div>
      <div className=" w-full text-center shadow-md  rounded-[20px]  lg:h-[80vh] py-6" >
          
          {/* <div className="text-center p-10">
            <h2 className="text-[#6964fa] font-bold text-4xl">Empower<span className="text-black">Mend</span> <span className="text-black">is More Than a Platform</span></h2>
          </div> */}
          
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
              
              <div className="my-auto lg:w-[76%]">
                <p className="text-[16px] lg:text-[24px] md:text-[20px] sm:text-[16px] sm:ms-8 md:ms-8 lg:ps-16 py-2 lg:text-start md:text-start sm:text-center "><span className="text-[#6964fa] font-bold ">Empower<span className="text-black">Mend</span></span> can expand its impact and provide diverse avenues for survivors to heal and grow.

                </p>
                <br />
                
                <p className="text-balance sm:ms-8 lg:ps-16 lg:text-start lg:text-[16px] md:text-start sm:text-center ">
                We believe in the power of community, compassion, and holistic healing approaches to support survivors on their path to recovery.
                </p>
              </div>
              <div className="lg:w-[80%] md:w-[80%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
                {/* <img src={about} alt="" className="object-center object-contain rounded-full " /> */}
                <SimpleSlider/>
              </div>
            </div>
          </div>
      </div>
      <div className="spacer p-4"></div>
      <div className="w-full text-center shadow-md  rounded-[20px] py-6">
        <div >
          <h2 className="text-black font-bold text-4xl text-center">Meetup of <span className="text-[#6964fa]">Experts</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
          <div className="lg:w-[81%] md:w-[81%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
            <Card/>
          </div>
          <div className="my-auto lg:w-[76%]">
            <p className="text-start sm:ms-8 md:ms-8 lg:ps-16 lg:text-[16px]">Bring a deep understanding of the human mind and emotions to the table. They can provide insights into the psychological impact of abuse and harassment, offer coping strategies, and guide individuals towards healing and resilience.</p>
          </div>
        </div>
        <div className="h-[1px] w-[90%] mx-auto bg-[#6964fa]"></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
          <div className="my-auto lg:w-[76%]">
            <p className="text-start sm:ms-8 md:ms-8 lg:ps-16 lg:text-[16px] ">Offer expertise in navigating the complex legal aspects of abuse and harassment. They can provide information on legal rights, options for seeking justice, and guidance on the legal processes involved in such cases. Their knowledge can empower individuals to understand and assert their legal rights in the face of abuse and harassment.</p>
          </div>
          <div className="lg:w-[81%] md:w-[81%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
            <Card/>
          </div>
        </div>
        
      </div>
      <div className="spacer p-6"></div>
      <div className="w-full text-center shadow-md  rounded-[20px] py-6">
      <div >
          <h2 className="text-black font-bold text-4xl text-center pt-4 pb-4">Creating a Safe Space:<span className="text-[#6964fa]"> Communicating with Your Child</span></h2>
          <div className="h-[1px] w-[70%] mx-auto bg-[#6964fa]"></div>
          <p className="mx-auto text-balance lg:w-[70%] text-center lg:mt-[40px] md:mt-[20] sm:mt-[10px] mb-5 ">Dear Parents, <br />
          As we navigate the complexities of parenting, it's crucial to establish an open and supportive environment for our children. By actively listening and engaging in meaningful conversations, we can help protect them from potential harm and provide the necessary support if they encounter distressing situations.</p>
        </div>
      <ScrollCarousell/>
      </div>
      <div className="spacer p-6"></div>
      <div className=" w-full text-center p-[16px] bg-gradient-to-t from-indigo-300 from-20% via-[#ffe5f9] via-50% to-white to-90% rounded-[20px]  lg:h-[100vh] py-6" >
          
          <div className="text-center p-10">
            <h2 className="text-[#6964fa] font-bold text-4xl">Community <span className="text-black">Building</span></h2>
          </div>
          
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-[12px] lg:gap-6 md:gap-4 lg:p-[60px] md:p-[40px] sm:p-[10px] lg:text-center">
              
              <div className="lg:w-[76%] md:w-[80%] sm:w-[76%] sm:mt-6 sm:mx-auto sm:text-center">
                <img src={about} alt="" className="object-center object-contain mix-blend-multiply " />
              </div>

              <div className="my-auto lg:w-[76%]">
                <p className="lg:text-[16px] lg:ps-16 py-2 lg:text-end text-balance md:text-end sm:text-center ">At EmpowerMend, we understand the power of shared experiences. Our platform provides a safe haven for survivors to connect, share their stories, and find support from others who understand their pain. 
                </p>
                <br />
                
                <p className="text-balance lg:ps-16 lg:text-end text-[16px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[#6964fa] font-medium md:text-start sm:text-center ">
                Together, we can build a community of resilience, compassion, and empowerment.
                </p>
                <div className="text-end mt-4">
                  <Button name="Explore Now"></Button>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="spacer p-6"></div>
      
      {/* <div className="flex w-full justify-center items-center h-[100vh]">
        <div className="flex sm:w-[70%] w-full sm:px-0  px-3 sm:mt-0  mt-[70px] justify-center sm:flex-nowrap flex-wrap items-center">
        <img
            src="https://i.pinimg.com/564x/97/5d/93/975d93cfb1312eace8e36f740664791f.jpg"
            className="sm:w-[40%] w-[400px]"
            alt=""
          />
          <div className="">
            <h1 className=" text-[40px] font-semibold leading-10">
              Make Your
              <br /> Shopping <span style={{ color: "#6964fa" }}>Esaier</span>
            </h1>
            <br />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Voluptas ullam tempore ipsa atque a iusto, <br />
              voluptate fugit doloremque quod?
            </p>
            <br />
            <Button style="text-[18px]" name="Know us" />
          </div>
          
        </div>
        </div> */}
        <AyurHome/>
        <div className="spacer p-6"></div>
    </section>
    
  );
};

export default Home;
