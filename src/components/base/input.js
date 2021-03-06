import React from 'react'

const Input = ({type, className, style, placeholder, onChange, value, name, ref, accept, defaultValue, required}) => {
  return (
    <input
    type={type}
    className={className}
    style={style}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    name={name}
    ref={ref}
    accept={accept}
    defaultValue={defaultValue}
    required={required}
    />
  )
}

export default Input