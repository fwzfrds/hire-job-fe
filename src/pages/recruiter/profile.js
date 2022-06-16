import React from 'react'
import Navbar from '../../components/module/navbar'
import Button from '../../components/base/button';
import styles from '../../assets/css/recruiterProfile.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import cover from './cover.jpg'
import edit from './edit.png'
import profile from './profile.png'
import location from './location.png'

import mail from './mail.png'
import instagram from './instagram.png'
import phone from './phone.png'
import linkedin from './linkedin.png'
import Footer from '../../components/module/footer/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
        <Navbar />

        <div className='container' style={{marginBottom: '150px'}}>
            <div className={styles['profile-card']}>
                <div className={styles['cover-image']}>
                    <img src={cover} alt='cover'/>
                    <div className={styles['cover-wrapper']}>
                        <img src={edit} alt='edit'/>
                        <span>Ubah Latar</span>
                    </div>
                </div>

                <div className={styles['recruiter-data']}>
                    <div className={styles['profile-photo']}>
                        <img src={profile} alt='profile'/>
                    </div>
                    <span style={{fontSize: '22px', fontWeight: '600'}}>PT. Martabat Jaya Abadi</span>
                    <span className={styles.biodata}>Financial</span>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <img style={{marginRight: '5px'}} src={location} alt='location'/>
                        <span className={styles.biodata}>Purwokerto, Jawa Tengah</span>
                    </div>
                    <p className={styles.biodata}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eveniet quae magni corporis. Aliquid aliquam cumque, doloremque illo vitae explicabo aperiam ut voluptate veritatis nulla, similique quidem, ad fuga possimus!</p>
                    <Link to='/profile-edit'>
                    <Button
                    type='submit'
                    className={styles['edit-button']}
                    style={{
                        fontWeight: '700'
                    }}
                    title='Edit Profile'
                    />
                    </Link>
                    <div className={styles.contacts}>
                        <div className={styles['contact-logo']}>
                            <img src={mail} alt='email'/>
                            <img src={instagram} alt='instagram'/>
                            <img src={[phone]} alt='phone'/>
                            <img src={linkedin} alt='linkedin'/>
                        </div>

                        <div className={styles['contact-account']}>
                            <span>martabatjaya@gmail.com</span>
                            <span>martabat_jaya</span>
                            <span>0821-8190-1821</span>
                            <span>Martabat Jaya Abadi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Profile