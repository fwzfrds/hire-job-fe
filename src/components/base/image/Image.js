import React from 'react'
import styles from './Image.module.css'

const Image = ({source, style}) => {
  return (
    <div style={style}>
        <img 
            src={source} 
            alt="" 
            className={`${styles['image']}`}
        />
    </div>
  )
}

export default Image