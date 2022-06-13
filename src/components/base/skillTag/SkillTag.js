import React from 'react'
import styles from './SkillTag.module.css'

const SkillTag = ({skillName}) => {
  return (
    <div className={`${styles['skill-tag']}`}>
        {skillName}
    </div>
  )
}

export default SkillTag