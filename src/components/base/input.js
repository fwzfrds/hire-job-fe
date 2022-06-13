import React from 'react'

const Input = ({type, className, style, placeholder, onChange, value}) => {
  return (
    <input
    type={type}
    className={className}
    style={style}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    />
  )
}

export default Input