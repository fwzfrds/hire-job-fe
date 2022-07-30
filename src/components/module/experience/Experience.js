import React, { useEffect, useState } from 'react'
import styles from './Experience.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Experience = () => {

  const { id: jobseekerId } = useParams()
  const [jobseekerExpe, setJobseekerExpe] = useState('')

  useEffect(() => {
    if (jobseekerId) {
      // get Jobseeker Experiences
      const fetchJobseekerExpe = async () => {
        try {
          const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/experience/${jobseekerId}`)
          setJobseekerExpe(result.data.data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchJobseekerExpe()
    }
  }, [jobseekerId])

  return (
    <div className={`${styles['experience']}`}>
      {!jobseekerExpe ?
        <p>loading...</p>
        :
        jobseekerExpe.length < 1 ?
          <p>Jobseeker doesn't have experience yet.</p>
          :
          jobseekerExpe.map((expe, idx) => {
            return (
              <>
                <div key={idx} className={`${styles['exp-container']}`}>
                  <div className={`${styles['img-container']}`}>
                    <img src={'https://fakeimg.pl/350x200/?text=Company'} alt="" />
                  </div>
                  <div className={`${styles['exp-data']}`}>
                    <h4 className={`${styles.position}`}>
                      {expe.jobdesk}
                    </h4>
                    <h6 className={`${styles.company}`}>
                      {expe.corps_name}
                    </h6>
                    {/* <h6 className={`${styles.time}`}>July 2019 - January 2020 <span>6 months</span></h6> */}
                    <h6 className={`${styles.time}`}>
                      {expe.work_time}
                    </h6>
                    <p className={`${styles.description}`}>
                      {expe.description}
                    </p>
                  </div>
                </div>
                <hr />
              </>
            )
          })
      }
      {/* <div className={`${styles['exp-container']}`}>
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
      </div> */}
    </div>
  )
}

export default Experience