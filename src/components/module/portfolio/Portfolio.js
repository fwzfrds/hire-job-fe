import React, { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Portfolio = () => {

    const { id: jobseekerId } = useParams()
    const [jobseekerPorto, setJobseekerPorto] = useState('')

    useEffect(() => {
        if (jobseekerId) {
            // get Jobseeker Portfolio
            const fetchJobseekerPorto = async () => {
                try {
                    const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/portofolio/${jobseekerId}`)
                    setJobseekerPorto(result.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchJobseekerPorto()
        }
    }, [jobseekerId])

    return (
        <div className={`${styles['portfolio-container']}`}>
            {!jobseekerPorto ?
                <p>loading...</p>
                :
                jobseekerPorto.length < 1 ?
                    <p>Jobseeker doesn't have portfolio yet.</p>
                    :
                    jobseekerPorto.map((porto, idx) => {
                        return (
                            <div key={idx} className={`${styles['img-container']}`}>
                                <img
                                    src={porto.app_image ? porto.app_image : 'https://fakeimg.pl/350x200/?text=App'}
                                    alt={porto.app_name}
                                />
                                <p>{porto.app_name} ({porto.app_type})</p>
                            </div>
                        )
                    })
            }
            {/* <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/remainder-app1.png" alt="" />
                <p>Remainder App</p>
            </div>
            <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/socmed-app1.png" alt="" />
                <p>Social Media App</p>
            </div>
            <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/manweb-1.png" alt="" />
                <p>Project Management Web</p>
            </div>
            <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/remainder-app2.png" alt="" />
                <p>Remainder App</p>
            </div>
            <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/socmed-app2.png" alt="" />
                <p>Social Media App</p>
            </div>
            <div className={`${styles['img-container']}`}>
                <img src="/assets/img/portfolio/manweb-2.png" alt="" />
                <p>Project Management Web</p>
            </div> */}

        </div>
    )
}

export default Portfolio