import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './ResetPassRecruiter.module.css'

const ResetPassJobseeker = () => {
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
          <h3 className={`${styles.title}`}>Reset Password</h3>
          <p className={`${styles.text}`}>Enter your user account's verified email address and we will send you a password reset link.</p>
        </div>
        <div className={`${styles['greeting-mobile']}`}>
          <h3 className={`${styles.title}`}>Reset Password</h3>
          <p className={`${styles.text}`}>Lorom ipsum dolor si amet uegas anet.</p>
        </div>
        <form className={`${styles['input-form']}`}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Masukkan alamat email'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Kata sandi baru</label>
            <input type="password" placeholder='Masukkan kata sandi baru'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Konfrimasi kata sandi baru</label>
            <input type="password" placeholder='Masukkan konfirmasi kata sandi baru'/>
          </div>
          {/* <Link to='#' className={`${styles['forgot-password']}`}>Lupa kata sandi?</Link> */}
          <button className={`${styles['reset-button']}`}>Reset Password</button>
          {/* <p>Anda belum punya akun? <Link to='/jobseeker/register' className={`${styles['signup-here']}`}>Daftar disini</Link></p> */}
        </form>
      </div>
    </div>
  )
}

export default ResetPassJobseeker