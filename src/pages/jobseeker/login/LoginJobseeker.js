import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './LoginJobseeker.module.css'

const LoginJobSeeker = () => {
  return (
    <div className={`${styles['login-container']}`}>
      <Banner
        style={{
          // width: 600,
          marginLeft: 50,
          marginTop: 40,
          marginBottom: 40,
        }}
      />
      <Logo
        colorLogo={'purple'}
        style={{
            width: 100,
            display: `${window.innerWidth > 600 && 'none'}`,
            marginTop: 0,
            alignSelf: 'start'
        }}
      />
      <div className={`${styles['login-form']}`}>
        <div className={`${styles.greeting}`}>
          <h3 className={`${styles.title}`}>Hallo, Pewpeople</h3>
          <p className={`${styles.text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <div className={`${styles['greeting-mobile']}`}>
          <h3 className={`${styles.title}`}>Login</h3>
          <p className={`${styles.text}`}>Lorom ipsum dolor si amet uegas anet.</p>
        </div>
        <form className={`${styles['input-form']}`}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Masukkan alamat email'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Kata Sandi</label>
            <input type="password" placeholder='Masukkan kata sandi'/>
          </div>
          <Link to='/jobseeker/reset-password' className={`${styles['forgot-password']}`}>Lupa kata sandi?</Link>
          <button className={`${styles['login-button']}`}>Masuk</button>
          <p>Anda belum punya akun? <Link to='/jobseeker/register' className={`${styles['signup-here']}`}>Daftar disini</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginJobSeeker