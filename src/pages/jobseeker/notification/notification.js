import React from 'react'
import Footer from '../../../components/module/footer/Footer'
import Navbar from '../../../components/module/navbar'

import styles from '../../../assets/css/notification.module.css'

import profile from './profile.png'
import Button from '../../../components/base/button'

const Notification = () => {
  return (
    <div>
      <Navbar />

      <div className={`container ${styles['notification-wrapper']}`}>
        <div style={{display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px'}}>
          <div style={{width: '10%', height: '100px', marginRight: '20px'}}>
            <img src={profile} alt='' style={{height: '100%'}}/>
          </div>

          <div className={styles.detail}>
            <span>Nama Recruiter</span>
            <span>Perusahaan Recruiter</span>
            <span>Tujuan Pesan</span>
          </div>

          <div style={{display: 'flex'}}>
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

        <div className={styles.hl}></div>

        <div style={{display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px'}}>
          <div style={{width: '10%', height: '100px', marginRight: '20px'}}>
            <img src={profile} alt='' style={{height: '100%'}}/>
          </div>

          <div className={styles.detail}>
            <span>Nama Recruiter</span>
            <span>Perusahaan Recruiter</span>
            <span>Tujuan Pesan</span>
          </div>

          <div style={{display: 'flex'}}>
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

        <div className={styles.hl}></div>

        <div style={{display: 'flex', alignItems: 'center', padding: '15px 0 15px 20px'}}>
          <div style={{width: '10%', height: '100px', marginRight: '20px'}}>
            <img src={profile} alt='' style={{height: '100%'}}/>
          </div>

          <div className={styles.detail}>
            <span>Nama Recruiter</span>
            <span>Perusahaan Recruiter</span>
            <span>Tujuan Pesan</span>
          </div>

          <div style={{display: 'flex'}}>
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
      </div>

      <Footer />
    </div>
  )
}

export default Notification