import React, { useEffect } from 'react'
import Card from '../../../components/module/card/Card'
import Footer from '../../../components/module/footer/Footer'
import styles from './HomeRecruiter.module.css'
import { getUser } from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/base/loading/Loading'
import Navbar from '../../../components/module/navbar'
import Searchbar from '../../../components/module/searchbar'

const HomeRecruiter = () => {

    const dispatch = useDispatch()
    const { isLoading, users } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    console.log(users)
    console.log(isLoading)

    return (
        <div className={`${styles['home-container']}`}>
            {/* <nav
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
            </nav> */}
            <Navbar />
            <div className={`${styles.header}`}>
                <h3 className={`${styles['header-title']}`}>Home</h3>
            </div>
            {/* <div className={`${styles['search-container']}`}>
                <div className={`${styles.search}`}>
                    search
                </div>
            </div> */}
            <Searchbar />
            <div className={`${styles['cards-container']}`}>
                {isLoading === true ? <Loading /> : users.data.map(user => {
                    return (
                        <React.Fragment key={user.id}>
                            <Card
                                location={user.address ? user.address : 'Indonesia'}
                                name={user.full_name}
                                img={user.photo}
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
            <div
                style={{ 
                    marginLeft: 100,
                 }}
            >
            {isLoading === true ? <Loading /> : new Array(users.pagination.totalPage).fill().map((item, index) =>
                        <button
                            // onClick={() => handlePage(index + 1)}
                            // text={index + 1}
                            key={index}
                            style={{ 
                                marginRight: 20,
                                border: 'none',
                                borderRadius: 5,
                                background: '#5E50A1',
                                padding: 10,
                                color: '#FFF',
                                fontWeight: 600
                             }}
                        >
                            {index + 1}
                        </button>)}
            </div>


            <Footer />
        </div>
    )
}

export default HomeRecruiter