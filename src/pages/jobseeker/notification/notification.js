import React, { useEffect, useState } from 'react'
import Footer from '../../../components/module/footer/Footer'
import Navbar from '../../../components/module/navbar'

import styles from '../../../assets/css/notification.module.css'

import profile from './profile.png'
import Button from '../../../components/base/button'
import NavbarLP from '../../../components/module/navbarLP'
import axios from 'axios'

const Notification = () => {

  const [userData, setUserData] = useState('')
  const [token, setToken] = useState('')
  const [hireHistory, setHireHistory] = useState('')

  useEffect(() => {
    const local = localStorage.getItem('PeworldUser')
    const localData = JSON.parse(local)
    setUserData(localData)
    setToken(localData.token)
  }, [])

  useEffect(() => {
    const fetchHire = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/hire`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data.data)
        setHireHistory(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (token) {
      fetchHire()
    }
  }, [token])

  return (
    <div>
      {userData ?
        <Navbar
          userData={userData}
        />
        :
        <NavbarLP />
      }

      <div className={`container ${styles['notification-wrapper']}`}>
        {!hireHistory ?
          <p>Loading...</p>
          :
          hireHistory.length < 0 ?
            <p>Offering is empty.</p>
            :
            hireHistory.map((hire, idx) => {
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px' }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    marginRight: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '50%'
                  }}>
                    <img src={'/assets/img/photo.webp'} alt='' style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>

                  <div className={styles.detail}>
                    <span>{hire.rec_name}</span>
                    <span>{hire.purpose}</span>
                    <span>{hire.message}</span>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <Button
                      className={styles['accept-button']}
                      title='Accept'
                    />
                    <Button
                      className={styles['reject-button']}
                      title='Reject'
                    />
                  </div>
                </div>
              )
            })
        }


        {/* <div className={styles.hl}></div> */}

        {/* <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px' }}>
          <div style={{ width: '10%', height: '100px', marginRight: '20px' }}>
            <img src={profile} alt='' style={{ height: '100%' }} />
          </div>

          <div className={styles.detail}>
            <span>Nama Recruiter</span>
            <span>Perusahaan Recruiter</span>
            <span>Tujuan Pesan</span>
          </div>

          <div style={{ display: 'flex' }}>
            <Button
              className={styles['accept-button']}
              title='Accept'
            />
            <Button
              className={styles['reject-button']}
              title='Reject'
            />
          </div>
        </div> */}

        {/* <div className={styles.hl}></div> */}

        {/* <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px' }}>
          <div style={{ width: '10%', height: '100px', marginRight: '20px' }}>
            <img src={profile} alt='' style={{ height: '100%' }} />
          </div>

          <div className={styles.detail}>
            <span>Nama Recruiter</span>
            <span>Perusahaan Recruiter</span>
            <span>Tujuan Pesan</span>
          </div>

          <div style={{ display: 'flex' }}>
            <Button
              className={styles['accept-button']}
              title='Accept'
            />
            <Button
              className={styles['reject-button']}
              title='Reject'
            />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
}

export default Notification