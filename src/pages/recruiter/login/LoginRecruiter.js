import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../components/base/logo/Logo'
import Banner from '../../../components/module/banner/Banner'
import styles from './LoginRecruiter.module.css'
import { login } from '../../../config/redux/actions/recruiterAction'
import { useDispatch, useSelector } from 'react-redux'
import ValidMessage from '../../../components/base/validation/ValidMessage';
import swal from 'sweetalert'

const LoginRecruiter = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.users)

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [isLoginError, setIsLoginError] = useState('')
  const [buttonDisable, setButtonDisable] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleInputLogin = (e) => {
    e.persist()
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setFormErrors(validate(loginData))
    setIsSubmit(true)
  }

  useEffect(() => {

    if (Object.keys(formErrors).length === 0 && isSubmit) {

      const sendLogin = async () => {
        // try {

        setButtonDisable(true)
        dispatch(login(loginData, navigate)).then(() => {
          setButtonDisable(false)
        }).catch((error) => {
          console.log(error)
          setIsLoginError(error.response.data.message)
          setButtonDisable(false)
          return swal({
            title: "Warning",
            text: `${error.response.data.message}`,
            icon: "warning"
          });
        })

        // } catch (error) {
        //     console.log(error)
        //     setIsLoginError(error.response.data.message)
        //     setButtonDisable(false)
        //     return swal({
        //         title: "Warning",
        //         text: `${error.response.data.message}`,
        //         icon: "warning"
        //     });
        // }
      }

      sendLogin()
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!values.email) {
      errors.email = 'email is required!'
    } else if (!regEx.test(values.email)) {
      errors.email = 'email is invalid!'
    }

    if (!values.password) {
      errors.password = 'password is required!'
    } else if ((values.password).length < 8) {
      errors.password = 'password must be more than 8 characters!'
    }

    return errors
  }

  console.log(loginData)

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
        <form onSubmit={handleLogin} className={`${styles['input-form']}`}>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email" id='email' name='email'
              placeholder='Masukkan alamat email'
              onChange={handleInputLogin}
            />
          </div>
          <div className={`${styles['input-container']}`}>
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password" id='password' name='password'
              placeholder='Masukkan kata sandi'
              onChange={handleInputLogin}
            />
          </div>
          <Link to='/recruiter/reset-password' className={`${styles['forgot-password']}`}>Lupa kata sandi?</Link>
          <button className={`${styles['login-button']}`}
            // text={buttonDisable ? 'Loading...' : 'Login'}
            type={'submit'}
            style={buttonDisable ? { pointerEvents: 'none' } : {}}
          >
            {buttonDisable ? 'Loading...' : 'Login'}
          </button>
          <p>Anda belum punya akun? <Link to='/recruiter/register' className={`${styles['signup-here']}`}>Daftar disini</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginRecruiter
