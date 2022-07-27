import React, { useEffect, useState } from 'react'
import Button from '../../../components/base/button'
import Input from '../../../components/base/input'
import SkillTag from '../../../components/base/skillTag/SkillTag'
import Footer from '../../../components/module/footer/Footer'
import Navbar from '../../../components/module/navbar'
import styles from '../../../assets/css/hiring.module.css'
import profile from './profile.png'
import location from './location.png'
import NavbarLP from '../../../components/module/navbarLP'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const Hiring = () => {

  const [userData, setUserData] = useState('')
  const { id: jobseekerId } = useParams()
  const [jobseeker, setJobseeker] = useState('')
  const [jobseeSkills, setJobseeSkills] = useState('')
  const [hireData, setHireData] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const local = localStorage.getItem('PeworldAdmin')
    const localData = JSON.parse(local)
    setUserData(localData)
  }, [])

  useEffect(() => {
    // Get Jobseeker Data
    const fetchJobseeker = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/users/profile/${jobseekerId}`)
        setJobseeker(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    // get Jobseeker skills
    const fetchJobseekerSkills = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill/${jobseekerId}`)
        console.log(result.data.data)
        setJobseeSkills(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (jobseekerId) {
      fetchJobseeker()
      fetchJobseekerSkills()
    }
  }, [jobseekerId])

  const handleInputHire = (e) => {
    e.persist()

    setHireData({ ...hireData, [e.target.name]: e.target.value })
  }

  const handleSubmitHire = async (e) => {
    e.preventDefault()

    setHireData({ ...hireData, idRecruiter: userData.id, idJobseeker: jobseeker.id })
    setIsSubmit(true)
  }

  useEffect(() => {
    if (isSubmit) {
      const postHire = async () => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/hire/`, hireData)

          console.log(response.data.data)

          swal({
            title: 'Hire',
            text: 'Hiring Jobseeker Success',
            icon: 'success'
          })

          setIsSubmit(false)

        } catch (error) {
          console.log(error)
          setIsSubmit(false)
          return swal({
            title: 'Hire',
            text: `${error.response.data.message}`,
            icon: 'error'
          })
        }
      }

      postHire()
    }
  }, [isSubmit, hireData])

  // console.log(userData.id)
  // console.log(jobseeker.id)
  console.log(hireData)

  return (
    <div className={`${styles.hiring}`}>
      {userData ?
        <Navbar
          userData={userData}
        />
        :
        <NavbarLP />
      }
      <div>
        <div className={`container ${styles['goes-horizontal']}`} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
          {/* profile */}
          <div className={styles.profile} style={{ width: '30%', height: 'max-content', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{
              width: '50%',
              margin: '10px 0 20px',
              alignSelf: 'center',
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden'
            }}>
              <img src={jobseeker.photo ? jobseeker.photo : '/assets/img/photo.webp'} alt=''
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <span style={{ fontSize: '22px', fontWeight: '600' }}>
              {jobseeker.full_name ? jobseeker.full_name : 'John Doe'}
            </span>
            <p>{jobseeker.description ? jobseeker.description : 'Jobseeker Profile'}</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={location} alt='' />
              <span style={{ color: '#9EA0A5', marginLeft: '5px' }}>
                {jobseeker.address ? jobseeker.address : 'Indonesia'}
              </span>
            </div>

            <p></p>

            <span style={{ fontSize: '22px', fontWeight: '600' }}>Skill</span>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 7
              }}>
                {!jobseeSkills ?
                  <p>Loading...</p>
                  :
                  jobseeSkills.length < 0 ?
                    <p>Jobseeker doesn't have skills yet.</p>
                    :
                    jobseeSkills.map((skill, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          <SkillTag skillName={skill.skill_name} />
                        </React.Fragment>
                      )
                    })
                }
                {/* <SkillTag skillName='Phyton' />
                <SkillTag skillName='Laravel' />
                <SkillTag skillName='Golang' /> */}
              </div>
            </div>
          </div>

          {/* form */}
          <div style={{ width: '65%' }}>
            <span style={{ fontSize: '32px', fontWeight: '600' }}>
              Hubungi {jobseeker.full_name}
            </span>
            <p style={{ fontSize: '18px', fontWeight: '400', color: '#46505C', marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic quia at molestiae, ipsam libero! Ipsum!</p>
            <div>
              <div className={styles.inputs}>
                <p>Tujuan tentang pesan ini</p>
                <Input
                  type='text'
                  className={styles['input-field']}
                  placeholder='Tujuan pesan'
                  name='purpose'
                  onChange={handleInputHire}
                  required={true}
                />
              </div>

              <div className={styles.inputs}>
                <p>Nama lengkap</p>
                <Input
                  type='text'
                  className={styles['input-field']}
                  placeholder='Masukkan nama lengkap'
                  name='recName'
                  onChange={handleInputHire}
                  required={true}
                />
              </div>

              <div className={styles.inputs}>
                <p>Email</p>
                <Input
                  type='text'
                  className={styles['input-field']}
                  placeholder='Masukkan email'
                  name='recEmail'
                  onChange={handleInputHire}
                  required={true}
                />
              </div>

              <div className={styles.inputs}>
                <p>No Handphone</p>
                <Input
                  type='text'
                  className={styles['input-field']}
                  placeholder='Masukkan no handphone'
                  name='recPhone'
                  onChange={handleInputHire}
                  required={true}
                />
              </div>

              <div className={styles.inputs}>
                <p>Deskripsi</p>
                <Input
                  type='text'
                  className={styles['input-field']}
                  placeholder='Deskripsikan/jelaskan lebih detail'
                  name='message'
                  onChange={handleInputHire}
                  required={true}
                />
              </div>

              <Button
                className={styles['hire-button']}
                title='Hire'
                type='button'
                onClick={handleSubmitHire}
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