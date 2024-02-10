import React from 'react'

const Button = (props) => {
    const name = props.name
    const style = props.style
  return (
    <button className={` bg-[#6a65ff] text-white font-medium transition-all duration-200 border-0 rounded-full hover:bg-[#273b47] hover:text-white py-1 px-5 ${style}`} >{name}</button>
  )
}

export default Button