import React from 'react'
import styles from './SocmedInfo.module.css'
import { Link } from 'react-router-dom'

const SocmedInfo = ({ src, username, linkedTo }) => {
    return (
        <Link
            className={`${styles['socmed-info']}`}
            to={'#'}
            onClick={() => window.open(linkedTo, "_blank")}
        >
            <img src={src} alt="" />
            <p>{username}</p>
        </Link>
    )
}

export default SocmedInfo