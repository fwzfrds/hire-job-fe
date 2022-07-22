import React from 'react'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={`${styles['portfolio-container']}`}>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/remainder-app1.png" alt="" />
            <p>Remainder App</p>
        </div>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/socmed-app1.png" alt="" />
            <p>Social Media App</p>
        </div>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/manweb-1.png" alt="" />
            <p>Project Management Web</p>
        </div>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/remainder-app2.png" alt="" />
            <p>Remainder App</p>
        </div>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/socmed-app2.png" alt="" />
            <p>Social Media App</p>
        </div>
        <div className={`${styles['img-container']}`}>
            <img src="/assets/img/portfolio/manweb-2.png" alt="" />
            <p>Project Management Web</p>
        </div>
        
    </div>
  )
}

export default Portfolio