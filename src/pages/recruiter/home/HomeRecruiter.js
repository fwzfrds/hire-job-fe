import React, { useEffect } from 'react'
import Card from '../../../components/module/card/Card'
import Footer from '../../../components/module/footer/Footer'
import styles from './HomeRecruiter.module.css'
import { getUser } from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/base/loading/Loading'

const HomeRecruiter = () => {

    const dispatch = useDispatch()
    const { isLoading, users } = useSelector((state) => state.users)

    useEffect(() => {
        console.log(users)
        dispatch(getUser())
    }, [])

    console.log(users)
    console.log(isLoading)

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
                {isLoading === true ? <Loading /> : users.map(user => {
                    return (
                        <React.Fragment>
                            <Card
                                location={user.address.city}
                                name={user.name}
                            />
                        </React.Fragment>
                    )
                })}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
            {/* <Loading /> */}


            <Footer />
        </div>
    )
}

export default HomeRecruiter