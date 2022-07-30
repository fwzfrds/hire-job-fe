import React, { useEffect, useState } from 'react'
import styles from './ProfileJobseeker.module.css'
import Navbar from '../../../components/module/navbar'
import JobSeekerAva from '../../../components/base/jobseekerAva/Image'
import Button from '../../../components/base/button'
import Footer from '../../../components/module/footer/Footer'
import SkillTag from '../../../components/base/skillTag/SkillTag'
import SocmedInfo from '../../../components/base/socmedInfo/SocmedInfo'
import { Outlet, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import NavbarLP from '../../../components/module/navbarLP'
import axios from 'axios'

const ProfileJobseeker = () => {

    const [userData, setUserData] = useState('')
    const navigate = useNavigate()
    const { id: jobseekerId } = useParams()
    const { pathname: path } = useLocation()
    const [menuActive, setMenuActive] = useState('')
    const [jobseeker, setJobseeker] = useState('')
    const [jobseekerSkills, setJobseekerSkills] = useState('')

    useEffect(() => {
        const local = localStorage.getItem('PeworldAdmin')
        const localData = JSON.parse(local)
        setUserData(localData)
        if (path) {
            const splitPath = path.split('/')
            console.log(splitPath)
            setMenuActive(splitPath.at(-1))
        }
    }, [path])

    // console.log(path)
    console.log(menuActive)

    useEffect(() => {
        if (jobseekerId) {
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
                    setJobseekerSkills(result.data.data)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchJobseeker()
            fetchJobseekerSkills()
        }
    }, [jobseekerId])

    const handleHire = () => {
        navigate(`/hire/${jobseekerId}`)
    }

    return (
        <div className={`${styles['profile-jobseeker']}`}>
            {userData ?
                <Navbar
                    userData={userData}
                />
                :
                <NavbarLP />
            }
            <div className={`${styles['purple-bg']}`}></div>
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['side-profile']}`}>
                    <JobSeekerAva
                        source={jobseeker.photo ? jobseeker.photo : '/assets/img/photo.webp'}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            alignSelf: 'center'
                        }}
                    />
                    <div className={`${styles['about-profile']}`}>
                        <h3 className={`${styles.name}`}>
                            {jobseeker.full_name ? jobseeker.full_name : 'John Doe'}
                        </h3>
                        <h6 className={`${styles.position}`}>
                            {jobseeker.jobdesk ? jobseeker.jobdesk : 'Web Developer'}
                        </h6>
                        <div className={`${styles.location}`}>
                            <img src="/assets/img/icons/map-pin.png" alt="" />
                            <p className={`${styles['text-location']}`}>
                                {jobseeker.address ? jobseeker.address : 'Indonesia'}
                            </p>
                        </div>
                        <p className={`${styles.status}`}>Freelancer</p>
                        <p className={`${styles.about}`}>
                            {jobseeker.description ? jobseeker.description : 'A professional programmer'}
                        </p>
                    </div>
                    <Button
                        title={`Hire`}
                        type={'button'}
                        // className={''}
                        style={{
                            width: '297px',
                            height: '50px',
                            background: '#5E50A1',
                            borderRadius: '4px',
                            border: 'none',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 700,
                            marginTop: '20px'
                        }}
                        onClick={handleHire}
                    // value={value}
                    />
                    <div className={`${styles.skills}`}>
                        <h3 className={`${styles['skill-title']}`}>Skill</h3>
                        <div className={`${styles['skill-group']}`}>
                            {!jobseekerSkills ?
                                <p>loading...</p>
                                :
                                jobseekerSkills.length < 1 ?
                                    <p>Jobseeker doesn't have skills yet.</p>
                                    :
                                    jobseekerSkills.map((skill, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                <SkillTag
                                                    skillName={skill.skill_name}
                                                />
                                            </React.Fragment>
                                        )
                                    })
                            }
                            {/* <SkillTag
                                skillName={`Phyton`}
                            />
                            <SkillTag
                                skillName={`Laravel`}
                            />
                            <SkillTag
                                skillName={`Golang`}
                            />
                            <SkillTag
                                skillName={`Javascript`}
                            />
                            <SkillTag
                                skillName={`PHP`}
                            />
                            <SkillTag
                                skillName={`HTML`}
                            />
                            <SkillTag
                                skillName={`C++`}
                            />
                            <SkillTag
                                skillName={`Kotlin`}
                            />
                            <SkillTag
                                skillName={`Switf`}
                            /> */}
                        </div>
                    </div>
                    <div className={`${styles['social-media']}`}>
                        <SocmedInfo
                            src={`/assets/img/icons/mail.png`}
                            username={jobseeker.email ? jobseeker.email : `programmer@gmail.com`}
                            linkedTo={`https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com`}
                        />
                        <SocmedInfo
                            src={`/assets/img/icons/instagram.png`}
                            username={`@Louist91`}
                            linkedTo={`https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com`}
                        />
                        <SocmedInfo
                            src={`/assets/img/icons/github.png`}
                            username={`@Louistommo`}
                            linkedTo={`https://github.com/fwzfrds`}
                        />
                        <SocmedInfo
                            src={`/assets/img/icons/gitlab.png`}
                            username={`@Louistommo91`}
                            linkedTo={`https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com`}
                        />
                    </div>
                </div>
                <div className={`${styles['profile-data']}`}>
                    <div className={`${styles['nav-link']}`}>
                        <NavLink
                            to={`/recruiter/jobseeker-profile/${jobseekerId}/portfolio`}
                            className={`${styles['link']}`}
                            style={menuActive === 'portfolio' ? {
                                color: '#000000'
                            } :
                                {
                                    color: '#9EA0A5'
                                }
                            }
                        >
                            Portfolio
                        </NavLink>
                        <NavLink
                            to={`/recruiter/jobseeker-profile/${jobseekerId}/experience`}
                            className={`${styles['link']}`}
                            style={menuActive === 'experience' ? {
                                color: '#000000'
                            } :
                                {
                                    color: '#9EA0A5'
                                }
                            }
                        >
                            Experience
                        </NavLink>
                    </div>

                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileJobseeker