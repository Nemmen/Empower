
import React from 'react';
import svg12 from '../svgs/12.svg'
function AyurCards() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl tracking-tight font-bold"><span className='text-[#6964fa]'>Ayurvedic techniques</span>  to promote mental healing</h2>
      </div>

      <div className="flex md:flex-wrap flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img className="w-1/2 md:w-full mx-auto object-contain" src="https://placeholder.pics/svg/400" alt="can_help_banner" />
        </div>
        {/* end can help image */}
        
        <div className="flex-1 flex flex-col  sm:flex-row flex-wrap mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <div className="h-full py-4 px-6 border border-[#6964fa] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-xl font-bold text-[#6964fa] text-md mb-6">Pranayama and Meditation</h3>
              <p className="text-sm">Controlled breathing exercises and meditation can help manage stress, anxiety, and trauma, providing a sense of calm and emotional balance.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <div className="h-full py-4 px-6 border border-[#6964fa] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-xl font-bold text-[#6964fa] text-md mb-6">Aromatherapy</h3>
              <p className="text-sm">The use of essential oils, such as lavender or chamomile, can create a soothing environment, promoting relaxation and emotional well-being..</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2">
            <div className="h-full py-4 px-6 border border-[#6964fa] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-xl font-bold text-[#6964fa] text-md mb-6">Herbal Remedies</h3>
              <p className="text-sm">Ayurvedic herbs like Ashwagandha and Tulsi are known for their adaptogenic properties, which can help reduce stress, support mental clarity, and emotional resilience.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2">
            <div className="h-full py-4 px-6 border border-[#6964fa] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-xl text-[#6964fa] font-bold text-md mb-6">Yoga and Mindfulness Practices</h3>
              <p className="text-sm"> Engaging in yoga asanas, mindfulness meditation, and yoga nidra can help release emotional tension, improve mental focus, and restore inner equilibrium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AyurCards;


// This JSX code mirrors the structure and classes of the provided HTML code, making it suitable for use in a React component.
