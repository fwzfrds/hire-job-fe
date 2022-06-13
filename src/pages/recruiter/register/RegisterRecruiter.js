import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './RegisterRecruiter.module.css'

const RegisterJobseeker = () => {
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
            marginTop: 20,
            alignSelf: 'start'
        }}
      />
      <div className={`${styles['login-form']}`}>
        <div className={`${styles.greeting}`}>
          <h3 className={`${styles.title}`}>Hallo, Pewpeople</h3>
          <p className={`${styles.text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <div className={`${styles['greeting-mobile']}`}>
          <h3 className={`${styles.title}`}>Register</h3>
          <p className={`${styles.text}`}>Lorem ipsum dolor si amet uegas anet.</p>
        </div>
        <form className={`${styles['input-form']}`}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="name">Nama</label>
            <input type="text" id='name' placeholder='Masukkan nama lengkap'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Masukkan alamat email'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="comp_name">Nama Perusahaan</label>
            <input type="text" id='comp_name' placeholder='Masukkan nama perusahaan'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="position">Jabatan</label>
            <input type="text" id='position' placeholder='Posisi di perusahaan'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="phone">No. Handphone</label>
            <input type="tel" id='phone' placeholder='Masukkan nomor handphone aktif'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="password">Kata Sandi</label>
            <input type="password" id='password' placeholder='Masukkan kata sandi'/>
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="confirm">Konfirmasi kata sandi</label>
            <input type="password" id='confirm' placeholder='Masukkan konfirmasi kata sandi'/>
          </div>
          <button className={`${styles['register-button']}`}>Daftar</button>
          <p>Anda sudah punya akun? <Link to='/recruiter/login' className={`${styles['signup-here']}`}>Masuk disini</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterJobseeker