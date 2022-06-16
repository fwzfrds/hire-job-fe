import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './RegisterJobseeker.module.css'
import swal from 'sweetalert'
// import axios from 'axios'
import {register} from '../../../config/redux/actions/userAction'
import {useDispatch, useSelector} from 'react-redux'

const RegisterJobseeker = () => {

  const dispatch = useDispatch()
  const { isLoading, users } = useSelector((state) => state.users)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    hp: ''
  })

  const [confirmPassword, setConfirmPassword] = useState(null)

  const handleInput = (e) => {
    e.persist();

    setData({ ...data, [e.target.name]: e.target.value });

  }

  const handleConfirmInput = (e) => {
    e.persist();

    console.log(e.target.value)

    setConfirmPassword(e.target.value)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (confirmPassword === data.password) {
      console.log('registrasi bisa')
      dispatch(register(data))
    } else {
      console.log('konfirmasi password tidak sesuai')
      swal({
        title: "Regist Error!",
        text: `Konfirmasi kata sandi tidak sesuai`,
        icon: "error"
      });
    }

  }

  console.log(users)

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
          <p className={`${styles.text}`}>Lorom ipsum dolor si amet uegas anet.</p>
        </div>
        <form className={`${styles['input-form']}`} onSubmit={handleSubmit}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="name">Nama</label>
            <input type="text" id='name' name='name' placeholder='Masukkan nama lengkap' onChange={handleInput} />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='Masukkan alamat email' onChange={handleInput} />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="phone">No. Handphone</label>
            <input type="tel" id='phone' name='hp' placeholder='Masukkan nomor handphone aktif' onChange={handleInput} />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="password">Kata Sandi</label>
            <input type="password" id='password' name='password' placeholder='Masukkan kata sandi' onChange={handleInput} />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="confirm">Konfirmasi kata sandi</label>
            <input type="password" id='confirm' name='confirm' placeholder='Masukkan konfirmasi kata sandi' onChange={handleConfirmInput} />
          </div>
          <button type='submit' className={`${styles['register-button']}`}>Daftar</button>
          <p>Anda sudah punya akun? <Link to='/jobseeker/login' className={`${styles['signup-here']}`}>Masuk disini</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterJobseeker