import React from 'react'

const Button = ({type, className, style, onClick, value, title}) => {
  return (
    <button 
    type={type}
    className={className}
    style={style}
    onClick={onClick}
    value={value}
    >
        {title}
    </button>
  )
}

export default Button