import React, { useState, useEffect } from 'react'
import Logo from '../../base/logo/Logo'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className={`${styles['footer']}`}>
            <div className={`${styles['footer-container']}`}>
                <Logo
                    colorLogo={'white'}
                    style={{
                        width: `${window.innerWidth > 600 ? 178 : 100}px`
                    }}
                />
                <p className={`${styles.text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <hr 
                    style={{ 
                        color: 'white'
                     }}
                />
                <div className={`${styles['footer-info']}`}>
                    <p className={`${styles.copyright}`}>2022 Peworld. All right reserved</p>
                    <div className={`${styles['footer-contact']}`}>
                        <Link to={'#'}>Telepon</Link>
                        <Link to={'#'}>Email</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
