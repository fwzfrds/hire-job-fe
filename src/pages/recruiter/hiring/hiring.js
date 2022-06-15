import React from 'react'
import Button from '../../../components/base/button'
import Input from '../../../components/base/input'
import SkillTag from '../../../components/base/skillTag/SkillTag'
import Footer from '../../../components/module/footer/Footer'
import Navbar from '../../../components/module/navbar'

import styles from '../../../assets/css/hiring.module.css'

import profile from './profile.png'
import location from './location.png'

const Hiring = () => {
  return (
    <div>
      <Navbar />

      <div className='container'>
        <div  style={{display: 'flex', justifyContent: 'space-between', marginTop: '50px'}}>
          {/* profile */}
          <div style={{width: '30%', height: 'max-content', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
            <div style={{width: '50%', margin: '10px 0 20px', alignSelf: 'center'}}>
              <img src={profile} alt='' style={{width: '100%'}}/>
            </div>

            <span style={{fontSize: '22px', fontWeight: '600'}}>Louis Tomlinson</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique excepturi est in reprehenderit rerum id cum.</p>

            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={location} alt=''/>
              <span style={{color: '#9EA0A5', marginLeft: '5px'}}>Purwokerto, Jawa Tengah</span>
            </div>

            <p></p>

            <span style={{fontSize: '22px', fontWeight: '600'}}>Skill</span>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
              <div style={{display: 'flex'}}> 
                <SkillTag skillName= 'Phyton' />
                <SkillTag skillName= 'Laravel' />
                <SkillTag skillName= 'Golang' />
              </div>
              <div style={{display: 'flex'}}>
                <SkillTag skillName= 'Javascript' />
                <SkillTag skillName= 'PHP' />
                <SkillTag skillName= 'HTML' />
              </div>
              <div style={{display: 'flex'}}>
                <SkillTag skillName= 'C++' />
                <SkillTag skillName= 'Kotlin' />
                <SkillTag skillName= 'Swift' />
              </div>
            </div>
          </div>

          {/* form */}
          <div style={{width: '65%'}}>
            <span style={{fontSize: '32px', fontWeight: '600'}}>Hubungi Louis Tomlinson</span>
            <p style={{fontSize: '18px', fontWeight: '400', color: '#46505C', marginTop: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic quia at molestiae, ipsam libero! Ipsum!</p>
            <div>
              <div className={styles.inputs}>
                <p>Tujuan tentang pesan ini</p>
                <Input
                type='text'
                className= {styles['input-field']}
                placeholder='Tujuan pesan'
                />
              </div>

              <div className={styles.inputs}>
                <p>Nama lengkap</p>
                <Input
                type='text'
                className= {styles['input-field']}
                placeholder='Masukkan nama lengkap'
                />
              </div>

              <div className={styles.inputs}>
                <p>Email</p>
                <Input
                type='text'
                className= {styles['input-field']}
                placeholder='Masukkan email'
                />
              </div>

              <div className={styles.inputs}>
                <p>No Handphone</p>
                <Input
                type='text'
                className= {styles['input-field']}
                placeholder='Masukkan no handphone'
                />
              </div>

              <div className={styles.inputs}>
                <p>Deskripsi</p>
                <Input
                type='text'
                className= {styles['input-field']}
                placeholder='Deskripsikan/jelaskan lebih detail'
                />
              </div>
              
              <Button 
              className= {styles['hire-button']}
              title= 'Hire'
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hiring