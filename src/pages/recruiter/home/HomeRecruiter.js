import React from 'react'
import Card from '../../../components/module/card/Card'
import Footer from '../../../components/module/footer/Footer'
import styles from './HomeRecruiter.module.css'

const HomeRecruiter = () => {
    return (
        <div className={`${styles['home-container']}`}>
            <nav
                style={{
                    width: '100%',
                    height: 70,
                    // border: '2px solid black',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: 'white'
                }}
            >
                Navbar
            </nav>
            <div className={`${styles.header}`}>
                <h3 className={`${styles['header-title']}`}>Top Jobs</h3>
            </div>
            <div className={`${styles['search-container']}`}>
                <div className={`${styles.search}`}>
                    search
                </div>
            </div>
            <div className={`${styles['cards-container']}`}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


            <Footer />
        </div>
    )
}

export default HomeRecruiter