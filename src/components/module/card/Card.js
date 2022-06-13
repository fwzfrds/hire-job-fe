import React from 'react'
import JobSeekerAva from '../../base/jobseekerAva/Image'
import SkillTag from '../../base/skillTag/SkillTag'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={`${styles['card-container']}`}>
        <JobSeekerAva
            source={'/assets/img/abramov.jpg'}
            style={{ 
                width: 100,
                height: 100,
                borderRadius: '50%',
                overflow: 'hidden',
                alignSelf: 'center'
             }}
        />
        <div className={`${styles['jobseeker-info']}`}>
            <h3 className={`${styles.name}`}>Louis Tomlinson</h3>
            <p className={`${styles.role}`}>Web Developer</p>
            <div className={`${styles.location}`}>
                <img 
                    src="/assets/img/icons/map-pin.png" alt=""
                    style={{ 
                        alignSelf: 'center'
                     }} 
                />
                <p className={`${styles['jobseeker-loc']}`}>Jakarta</p>
            </div>
            <div className={`${styles.skills}`}>
                <SkillTag
                    skillName={'php'}
                />
                <SkillTag
                    skillName={'javascript'}
                />
                <SkillTag
                    skillName={'html'}
                />
            </div>
        </div>
        <div className={`${styles['hire']}`}>
             <button
                style={{ 
                    width: 148,
                    height: 54,
                    background: '#5E50A1',
                    borderRadius: 5,
                    border: 'none',
                    color: '#FFF',
                    cursor: 'pointer'
                 }}
             >
                Lihat Profile
             </button>
        </div>
    </div>
  )
}

export default Card