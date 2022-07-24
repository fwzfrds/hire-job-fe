import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import styles from '../../assets/css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import swal from 'sweetalert';

import logo from './logo.png'
import notif from './notif.png'
import mail from './mail.png'
import user from './user.png'

const Navbar = ({ userData }) => {

    // const [isLogin, setIsLogin] = useState(false)
    const [isLogout, setIsLogout] = useState(false)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const dataFromLocal = JSON.parse(localStorage.getItem('PeworldUser'))
    //     setUserData(detailUser)
    // }, [])

    const handleLogout = () => {
        swal({
            title: "Logout",
            text: `Are you sure want to logout?`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(async (isOkay) => {
            if (isOkay) {
                if (localStorage.getItem('PeworldUser')) {
                    localStorage.removeItem('PeworldUser')
                    //   setIsLogin(false)
                      setIsLogout('user')
                } else {
                    localStorage.removeItem('PeworldAdmin')
                    //   setIsLogin(false)
                      setIsLogout('admin')
                }
            }
        })
    }

    useEffect(() => {
        if (isLogout === 'user') {
          swal({
            title: "Log Out",
            text: `Log Out Success`,
            icon: "success"
          })
          navigate('/jobseeker/login')
        } else if (isLogout === 'admin') {
          swal({
            title: "Log Out",
            text: `Log Out Success`,
            icon: "success"
          })
          navigate('/login-admin')
        }
      }, [isLogout, navigate])

    return (
        <nav className={styles['navigation-bar']}>
            <div className='container'>
                <div className={styles['navbar-wrapper']}>
                    <NavLink to='/'>
                        <img src={logo} alt='logo' className={styles.logo} />
                    </NavLink>

                    <section className={styles['user-section']}>
                        <NavLink to='/notification'>
                            <img src={notif} alt='notif' />
                        </NavLink>

                        <NavLink to='/'>
                            <img src={mail} alt='mail' />
                        </NavLink>

                        <NavLink to={'#'} id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" >
                            {/* <NavLink to={userData.roles === 'user' ? `/jobseeker/edit/${userData.id}` : '/profile'} id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" > */}
                            <img
                                style={{
                                    borderRadius: '50%'
                                }}
                                src={userData.photo ? userData.photo : '/assets/img/photo.webp'} alt='user' />
                        </NavLink>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <NavLink to={userData.roles === 'user' ? `/jobseeker/edit/${userData.id}` : '/profile'}
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    }}
                                >
                                    <button className="dropdown-item" type="button">Profile</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'#'}
                                    style={{
                                        textDecoration: 'none',
                                        opacity: 0.5
                                    }}
                                    onClick={handleLogout}
                                >
                                    <button className="dropdown-item" type="button">Logout</button>
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar