import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <div className={`${styles['experience']}`}>
      <div className={`${styles['exp-container']}`}>
        <div className={`${styles['img-container']}`}>
          <img src="/assets/img/logo/tokopedia.png" alt="" />
        </div>
        <div className={`${styles['exp-data']}`}>
          <h4 className={`${styles.position}`}>Front End Engineer</h4>
          <h6 className={`${styles.company}`}>Tokopedia</h6>
          <h6 className={`${styles.time}`}>July 2019 - January 2020 <span>6 months</span></h6>
          <p className={`${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div>
      <hr />
      <div className={`${styles['exp-container']}`}>
        <div className={`${styles['img-container']}`}>
          <img src="/assets/img/logo/tokopedia.png" alt="" />
        </div>
        <div className={`${styles['exp-data']}`}>
          <h4 className={`${styles.position}`}>Front End Engineer</h4>
          <h6 className={`${styles.company}`}>Tokopedia</h6>
          <h6 className={`${styles.time}`}>July 2019 - January 2020 <span>6 months</span></h6>
          <p className={`${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experience