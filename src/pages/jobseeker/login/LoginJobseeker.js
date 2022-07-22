import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './LoginJobseeker.module.css'
import {login} from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import ValidMessage from '../../../components/base/validation/ValidMessage';
import swal from 'sweetalert'

const LoginJobSeeker = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.users)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const [isInputValid, setIsInputValid] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    e.persist();

    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  console.log(loginData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(loginData)
    const { email: emailData } = loginData
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(emailData)) {
      swal({
        title: "Error",
        text: `Email is not valid`,
        icon: "error",
      });
      return setIsInputValid({ ...isInputValid, email: 'email is not valid' })
    } else {
      setIsInputValid({ ...isInputValid, email: '' })
    }

    const localData = await localStorage.getItem('PeeworldRecruiter')
    if (localData) {
      return swal({
        title: "Error",
        text: `Anda sudah masuk sebagai recruiter`,
        icon: "error",
      });
    }

    // swal({
    //   title: "Login",
    //   text: `Login Success`,
    //   icon: "success",
    // });

    dispatch(login(loginData, navigate))

  }

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
        <form className={`${styles['input-form']}`} onSubmit={handleSubmit}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Masukkan alamat email' onChange={handleInput} />
            <ValidMessage
              text={isInputValid.email && `${isInputValid.email}`}
              style={{
                color: 'red'
              }}
            />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="">Kata Sandi</label>
            <input type="password" name='password' placeholder='Masukkan kata sandi' onChange={handleInput} />
          </div>
          <Link to='/jobseeker/reset-password' className={`${styles['forgot-password']}`}>Lupa kata sandi?</Link>
          <button type='submit' className={`${styles['login-button']}`}>
            {/* Masuk */}
            {isLoading === true ? 'Loading...' : 'Masuk'}
          </button>
          <p>Anda belum punya akun? <Link to='/jobseeker/register' className={`${styles['signup-here']}`}>Daftar disini</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginJobSeeker