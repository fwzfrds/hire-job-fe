import React from 'react'
import Logo from '../../base/logo/Logo'
import styles from './Banner.module.css'

const Banner = ({style}) => {
  return (
    <div
        className={`${styles['banner-container']}`}
        style={style}
    >
        <img src="/assets/img/banner/shape.png" alt="" />
        <div
            className={`${styles.content}`}
        >
            <Logo
                colorLogo={'white'}
                style={{
                    width: 100
                }}
            />
            <p
                className={`${styles['content-text']}`}
            >Temukan developer berbakat dan terbaik di berbagai bidang keahlian</p>
        </div>
    </div>
  )
}

export default Banner