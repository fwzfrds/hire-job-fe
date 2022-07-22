import React from 'react'

const Button = ({type, className, style, onClick, value, title, form}) => {
  return (
    <button 
    type={type}
    className={className}
    style={style}
    onClick={onClick}
    value={value}
    form={form}
    >
        {title}
    </button>
  )
}

export default Button