
import React from 'react'
import svg9 from '../img/undraw_Add_color_re_buro.png'
const Card = () => {
  return (
    <div>
        <div className="card-body relative w-[80%]">
            <div className="card">
                <img src={svg9} alt="Professional Image" />
            </div>
            <div className="content absolute bottom-[10%] w-[max-content] rounded-md p-3 left-[70%] bg-[#6964fa] text-white shadow-md hover:mb-3 transition-all duration-200">
                <p className='ps-3'>-Legal Expert</p>
            </div>
        </div>
    </div>
  )
}

export default Card