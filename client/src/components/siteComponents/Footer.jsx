import React from 'react';
import logo from '../img/empowermend.png';
import Button from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-[100%]'>
      <div className="p-6 border-2 rounded-full bg-gradient-to-t from-indigo-300 from-20% via-[#ffe5f9] via-50% to-white to-90% mx-auto lg:pt-7 md:pt-6 sm:pt-5 lg:pb-7 md:pb-6 sm:pb-5 shadow-lg bg-blue-300 relative w-3/4 mb-[-100px]">
        <div className="row text-center">
          <h2 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl">Join Worlds Fastest <br /> Growing Platform</h2>
          <div className="text-center p-2">
            <div className="input-group w-50 m-auto mt-3">
              <input type="text" className="rounded-full p-2 w-3/5 " placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className='mt-4'>
                <Button name="Contact Now"></Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <footer className="p-5 rounded-xl bg-gray-900">
        <div className="">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:text-center mt-[120px] pt-4 lg:h-[50vh] md:h-[70vh] h-[100%]">
            <div className="my-auto">
              <div className=''>
              <img src={logo} className="object-start h-24 w-24 mx-auto lg:h-38 lg:w-38 md:h-28 md-w-28 sm:w-28 sm:h-28 m-3" alt="Flowbite Logo" />
              </div>
              <p className="text-white text-center lg:text-start md:text-center sm:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt, autem voluptas exercitationem rerum omnis, inventore, blanditiis reiciendis adipisci incidunt a. Iste necessitatibus eveniet esse.</p>
              
            </div>
            <div className="flex flex-col gap-4 text-center mt-5 lg:text-start md:text-start sm:text-center ps-4 my-auto text-xl">
              <h4 className="text-white pb-2 text-xl lg:text-xl md:text-xl sm:text-lg font-bold">Pages</h4>
              <Link to="/home" className='text-white text-base lg:text-xl md:text-xl sm:text-lg'>Home</Link>
              <Link to="/community" className='text-white text-base lg:text-xl md:text-xl sm:text-lg'>Community</Link>
              <Link to="/about" className='text-white text-base lg:text-xl md:text-xl sm:text-lg'>About</Link>
              
            </div>
            <div className="flex flex-col gap-4 text-center mt-5 lg:text-start md:text-start sm:text-center ps-4 my-auto text-xl">
              <h4 className="text-white pb-2 text-xl font-bold">Utilities</h4>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">Privacy Policy</p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">License</p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">Terms of Use</p>
              <p className="text-white mt-1 text-base lg:text-xl md:text-xl sm:text-lg">FAQ</p>
            </div>
            <div className="my-auto p-3 text-center lg:text-star md:text-center sm:text-center">
              <h3 className="text-white text-start text-3xl pb-3 font-bold">Subscribe Now</h3>
              <div className="input-group m-auto mt-3">
              <input type="text" className="rounded-full p-2 w-[100%]" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className='mt-4'>
                <Button name="Contact Now"></Button>
              </div>
              
            </div>
            </div>
          </div>
          <hr className="text-white-50 mt-5 mb-5" />
          <p className="text-center text-white-50">Created By Team SolutioNexus</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
