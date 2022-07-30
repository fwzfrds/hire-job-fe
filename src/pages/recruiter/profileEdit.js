import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/navbar';
import Input from '../../components/base/input';
import Footer from '../../components/module/footer/Footer';
import Button from '../../components/base/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../../assets/css/recruiterEdit.module.css'

import cover from './cover.jpg'
import profile from './profile.png'
import edit from './edit2.png'
import location from './location.png'
import { Link } from 'react-router-dom';
import NavbarLP from '../../components/module/navbarLP';

const ProfileEdit = () => {

    const [userData, setUserData] = useState('')

    useEffect(() => {
        const local = localStorage.getItem('Peworldadmin')
        if (local) {
            const localData = JSON.parse(local)
            setUserData(localData)
        }
    }, [])

    return (
        <div>
            {userData ?
                <Navbar
                    userData={userData}
                />
                :
                <NavbarLP />
            }
            <div>
                <div className={styles['cover-image']}>
                    <img src={cover} alt='cover' />
                </div>

                <div className={`container ${styles['goes-horizontal']}`} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-200px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                        <div className={styles['profile-card']}>
                            <div className={styles['profile-image']}>
                                <img src={profile} alt='profile' />
                            </div>
                            <div className={styles.edit}>
                                <img src={edit} alt='edit' />
                                <span style={{ marginLeft: '5px' }}>Edit</span>
                            </div>
                            <span className={styles.company}>PT. Martabat Jaya Abadi</span>
                            <span className={styles.company}>Financial</span>
                            <div className={styles.location}>
                                <img src={location} alt='location' />
                                <span style={{ marginLeft: '5px' }}>Purwokerto, Jawa Tengah</span>
                            </div>
                        </div>
                        <Link to='/profile'>
                            <Button
                                type='submit'
                                className={styles['save-button']}
                                style={{
                                    fontWeight: '700'
                                }}
                                title='Simpan'
                            />
                        </Link>

                        <Link to='/profile'>
                            <Button
                                type='submit'
                                className={styles['cancel-button']}
                                style={{
                                    fontWeight: '700'
                                }}
                                // onClick=''
                                value=''
                                title='Batal'
                            />
                        </Link>
                    </div>

                    <div className={styles.form} style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
                        <div className={styles['edit-form']}>
                            <span className={styles.title}>Data Diri</span>
                            <div className={styles.hl}></div>
                            <div className={styles['inputs']}>
                                <p>Nama Perusahaan</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan nama perusahaan'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Bidang</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan bidang perusahaan ex: Financial'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Kota</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan kota'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Deskripsi Singkat</p>
                                <Input
                                    type='textarea'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Tuliskan deskripsi singkat'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Email</p>
                                <Input
                                    type='email'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan email'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Instagram</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan akun Instagram'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>Nomor Telepon</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan nomor telepon'
                                />
                            </div>
                            <div className={styles['inputs']}>
                                <p>LinkedIn</p>
                                <Input
                                    type='text'
                                    className={styles['input-field']}
                                    // style={style}
                                    placeholder='Masukkan akun LinkedIn'
                                />
                            </div>
                        </div>
                        <Link to='/profile'>
                            <Button
                                type='submit'
                                className={styles['save-button']}
                                style={{
                                    fontWeight: '700'
                                }}
                                title='Simpan'
                            />
                        </Link>

                        <Link to='/profile'>
                            <Button
                                type='submit'
                                className={styles['cancel-button']}
                                style={{
                                    fontWeight: '700'
                                }}
                                // onClick=''
                                value=''
                                title='Batal'
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProfileEdit