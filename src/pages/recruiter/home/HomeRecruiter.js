import React, { useEffect } from 'react'
import Card from '../../../components/module/card/Card'
import Footer from '../../../components/module/footer/Footer'
import styles from './HomeRecruiter.module.css'
import { getUser } from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

const HomeRecruiter = () => {

    const dispatch = useDispatch()
    const { isLoading, users } = useSelector((state) => state.users)

    useEffect(() => {
        console.log(users)
        dispatch(getUser())
    }, [])

    console.log(users)

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
                <h3 className={`${styles['header-title']}`}>Home</h3>
            </div>
            <div className={`${styles['search-container']}`}>
                <div className={`${styles.search}`}>
                    search
                </div>
            </div>
            <div className={`${styles['cards-container']}`}>
                {users.map(user => {
                    return (
                        <Card 
                            location={user.address.city}
                            name={user.name}
                        />
                    )
                })}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>


            <Footer />
        </div>
    )
}

export default HomeRecruiter