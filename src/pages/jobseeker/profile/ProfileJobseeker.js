import React from 'react'
import styles from './ProfileJobseeker.module.css'
import Navbar from '../../../components/module/navbar'
import JobSeekerAva from '../../../components/base/jobseekerAva/Image'
import Button from '../../../components/base/button'
import Footer from '../../../components/module/footer/Footer'
import SkillTag from '../../../components/base/skillTag/SkillTag'
import SocmedInfo from '../../../components/base/socmedInfo/SocmedInfo'
import { Link, Outlet, NavLink } from 'react-router-dom'

const ProfileJobseeker = () => {
    return (
        <div className={`${styles['profile-jobseeker']}`}>
            <Navbar />
            <div className={`${styles['purple-bg']}`}></div>
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['side-profile']}`}>
                    <JobSeekerAva
                        source={'/assets/img/abramov.jpg'}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            alignSelf: 'center'
                        }}
                    />
                    <div className={`${styles['about-profile']}`}>
                        <h3 className={`${styles.name}`}>Louis Tomlinson</h3>
                        <h6 className={`${styles.position}`}>Web Developer</h6>
                        <div className={`${styles.location}`}>
                            <img src="/assets/img/icons/map-pin.png" alt="" />
                            <p className={`${styles['text-location']}`}>Purwokerto, Jawa Tengah</p>
                        </div>
                        <p className={`${styles.status}`}>Freelancer</p>
                        <p className={`${styles.about}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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
                    // onClick={onClick}
                    // value={value}
                    />
                    <div className={`${styles.skills}`}>
                        <h3 className={`${styles['skill-title']}`}>Skill</h3>
                        <div className={`${styles['skill-group']}`}>
                            <SkillTag
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
                            />
                        </div>
                    </div>
                    <div className={`${styles['social-media']}`}>
                        <SocmedInfo
                            src={`/assets/img/icons/mail.png`}
                            username={`Louistommo@gmail.com`}
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
                            to={'/recruiter/jobseeker-profile/1/portfolio'}
                            className={`${styles['link']}`}
                        >Portfolio</NavLink>
                        <NavLink 
                            to={'/recruiter/jobseeker-profile/1/experience'}
                            className={`${styles['link']}`}
                        >Experience</NavLink>
                    </div>

                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileJobseeker