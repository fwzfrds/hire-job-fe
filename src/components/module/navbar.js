import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from '../../assets/css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import logo from './logo.png'
import notif from './notif.png'
import mail from './mail.png'
import user from './user.png'

const Navbar = ({ userData }) => {

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

                        <NavLink to={userData.roles === 'user' ? `/jobseeker/edit/${userData.id}` : '/profile'}>
                            <img
                                style={{ 
                                    borderRadius: '50%'
                                 }}
                                src={userData.photo ? userData.photo : '/assets/img/photo.webp'} alt='user' />
                        </NavLink>
                    </section>
                </div>
            </div>
        </nav>
    )
}

export default Navbar