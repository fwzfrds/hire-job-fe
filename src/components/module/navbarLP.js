import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from '../../assets/css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import logo from './logo.png'
import Button from '../base/button';

const NavbarLP = () => {
  return (
    <nav className={styles['navigation-bar-LP']}>
        <div className='container'>
            <div className={styles['navbar-wrapper']}>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className={styles.logo}/>
                </NavLink>

                <section className={styles['user-section']}>
                    <NavLink to='/login'>
                        <Button
                        type='submit'
                        className={styles['login-button']}
                        style={{
                            fontWeight: '700'
                        }}
                        onClick=''
                        value=''
                        title='Masuk'
                        />
                    </NavLink>

                    <NavLink to='/register'>
                        <Button
                        type='submit'
                        className={styles['register-button']}
                        style={{
                            fontWeight: '700'
                        }}
                        onClick=''
                        value=''
                        title='Daftar'
                        />
                    </NavLink>
                </section>
            </div>
        </div>
    </nav>
  )
}

export default NavbarLP