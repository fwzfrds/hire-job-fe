import React from 'react'
import styles from './Image.module.css'

const JobSeekerAva = ({source, style}) => {
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

export default JobSeekerAva