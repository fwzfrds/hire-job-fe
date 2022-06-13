import React from 'react'
import styles from './Logo.module.css'
import {Link} from 'react-router-dom'

const Logo = ({ colorLogo, style }) => {
    return (
        <Link
            className={`${styles['logo-container']}`}
            style={style}
            to='/'
        >
            {/* Color Logo Options: purple, white, navy */}
            <img src={`/assets/img/logo/logo-${colorLogo}.png`} alt="" />
        </Link>
    )
}

export default Logo