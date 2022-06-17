import React, { useState, useEffect } from 'react'
import styles from './EditProfJobseeker.module.css'
import Navbar from '../../../components/module/navbar'
import JobSeekerAva from '../../../components/base/jobseekerAva/Image'
import Button from '../../../components/base/button'
import Footer from '../../../components/module/footer/Footer'
import Input from '../../../components/base/input'
import Textarea from '../../../components/base/textarea/Textarea'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { addSkill, getUserSkill, deleteUserSkill, addExperience, deleteUserExp } from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/base/loading/Loading'

const EditProfJobseeker = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [authToken, setAuthToken] = useState('')
    
    // State from redux
    const { isLoading, userSkill } = useSelector((state) => state.userSkill)

    const { isLoading: isLoadingExp, userExperience } = useSelector((state) => state.userExperience)

    // Local state for submit
    const [skill, setSkill] = useState({
        skillName: ''
    })

    const [experience, setExperience] = useState({
        jobdesk: '',
        corpName: '',
        workTime: '',
        description: ''
    })

    // Use Effect
    useEffect(() => {
        const dataFromLocal = JSON.parse(localStorage.getItem('PeworldUser'))
        setAuthToken(dataFromLocal.token)
    }, []);

    useEffect(() => {
        if (authToken) {
            dispatch(getUserSkill(authToken))
        }
    }, [authToken, dispatch])

    // Skill handling
    const handleSkillInput = (e) => {
        e.persist();

        setSkill({ ...skill, [e.target.name]: e.target.value })
    }

    const handleSubmitSkill = (e) => {
        e.preventDefault()
        dispatch(addSkill(skill, authToken, navigate))
    }

    const handleDeleteSkill = (e, id, skillName) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: `${skillName} skill will be deleted`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((isOkay => {
            if (isOkay) {
                console.log('delete skill...')
                dispatch(deleteUserSkill(authToken, id, skillName))
            }
        }))

        return false
    }
    // Skill handling End

    // Experience handling
    const handleExperienceInput = (e) => {
        e.persist();

        setExperience({ ...experience, [e.target.name]: e.target.value })
    }

    const handleSubmitExperience = (e) => {
        e.preventDefault()
        dispatch(addExperience(experience, authToken, navigate))
    }

    const handleDeleteExp = (e, id, jobdesk, corps_name) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: `Experience at ${corps_name} as ${jobdesk} will be deleted`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((isOkay => {
            if (isOkay) {
                // console.log('delete experience success')
                dispatch(deleteUserExp(authToken, id, jobdesk, corps_name))
            }
        }))

        return false
    }

    console.log(userSkill)
    console.log(userExperience)
    // Experience handling End

    return (
        <div className={`${styles['profile-jobseeker']}`}>
            <Navbar

            />
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
                    <p>Edit</p>
                    <div className={`${styles['about-profile']}`}>
                        <h3 className={`${styles.name}`}>Louis Tomlinson</h3>
                        <h6 className={`${styles.position}`}>Web Developer</h6>
                        <div className={`${styles.location}`}>
                            <img src="/assets/img/icons/map-pin.png" alt="" />
                            <p className={`${styles['text-location']}`}>Purwokerto, Jawa Tengah</p>
                        </div>
                        <p className={`${styles.status}`}>Freelancer</p>
                    </div>
                    <Button
                        title={`Simpan`}
                        type={'button'}
                        style={{
                            width: '297px',
                            height: '50px',
                            background: '#5E50A1',
                            borderRadius: '4px',
                            border: 'none',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 700,
                            marginTop: '0px'
                        }}
                    />
                    <Button
                        title={`Batal`}
                        type={'button'}
                        style={{
                            width: '297px',
                            height: '50px',
                            background: 'none',
                            borderRadius: '4px',
                            border: '2px solid #5E50A1',
                            color: '#5E50A1',
                            fontSize: '16px',
                            fontWeight: 700,
                            marginTop: '20px'
                        }}
                    />
                </div>
                <div className={`${styles['profile-data']}`}>
                    <form className={`${styles['personal-data']}`}>
                        <h4>Data Diri</h4>
                        <hr />
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Nama Lengkap</label>
                            <Input
                                placeholder={'Masukkan nama lengkap'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Job desk</label>
                            <Input
                                placeholder={'Masukkan job desk'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Domisili</label>
                            <Input
                                placeholder={'Masukkan alamat domisili'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Tempat Kerja</label>
                            <Input
                                placeholder={'Masukkan tempat kerja'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <Textarea
                                labelName={'Deskripsi Singkat'}
                                id={'personal'}
                            />
                        </div>
                    </form>
                    <form id='skill-form' className={`${styles['skill']}`}>
                        <h4>Skill</h4>
                        <hr />
                        {isLoading === true ? 'Updating...' : userSkill.map((skill, idx) => {
                            return (
                                <div className={`${styles.skillList}`} key={idx}>
                                    <p>{skill.skill_name}</p>
                                    <button
                                        onClick={(e) => handleDeleteSkill(e, skill.id, skill.skill_name)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            )
                        })}
                        <div className={`${styles['input-group']} ${styles['input-skill']}`}>
                            <Input
                                placeholder={'Javascript'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px',
                                    // marginTop: '15px'
                                }}
                                name={`skillName`}
                                onChange={handleSkillInput}
                            />
                            <Button
                                form={'skill-form'}
                                title={`Simpan`}
                                type={'submit'}
                                style={{
                                    // width: '297px',
                                    height: '40px',
                                    background: '#FBB017',
                                    borderRadius: '4px',
                                    border: 'none',
                                    color: '#FFF',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    // marginTop: '20px',
                                    padding: 10
                                }}
                                onClick={handleSubmitSkill}
                            />
                        </div>
                    </form>
                    <form id='experience-form' className={`${styles['experience']}`}>
                        <h4>Pengalaman Kerja</h4>
                        <hr />
                        {isLoading === true ? 'Updating...' : userExperience.map((exp, idx) => {
                            return (
                                <div 
                                    key={idx} 
                                    className={`${styles.experience_list}`}
                                >
                                    <p>{exp.corps_name} : <span>{exp.jobdesk}</span></p>
                                    <button
                                        onClick={(e) => handleDeleteExp(e, exp.id, exp.jobdesk, exp.corps_name)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            )
                        } )
                        }
                        <hr />
                        <div className={`${styles['form-experience']}`}>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Posisi</label>
                                <Input
                                    placeholder={'Web Developer'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                    name={`jobdesk`}
                                    onChange={handleExperienceInput}
                                />
                            </div>
                            <div className={`${styles['double-input-group']}`}>
                                <div className={`${styles['input-group']}`}>
                                    <label htmlFor="">Nama Perusahaan</label>
                                    <Input
                                        placeholder={'PT Nocturnal'}
                                        style={{
                                            height: 40,
                                            paddingLeft: 15,
                                            border: '1px solid #9EA0A5',
                                            borderRadius: '5px'
                                        }}
                                        name={`corpName`}
                                        onChange={handleExperienceInput}
                                    />
                                </div>
                                <div className={`${styles['input-group']}`}>
                                    <label htmlFor="">Bulan/Tahun</label>
                                    <Input
                                        placeholder={'Web Developer'}
                                        style={{
                                            height: 40,
                                            paddingLeft: 15,
                                            border: '1px solid #9EA0A5',
                                            borderRadius: '5px'
                                        }}
                                        type={'month'}
                                        name={`workTime`}
                                        onChange={handleExperienceInput}
                                    />
                                </div>
                            </div>
                            <div className={`${styles['input-group']}`}>
                                <Textarea
                                    labelName={'Deskripsi Singkat'}
                                    id={'experience'}
                                    name={`description`}
                                    onChange={handleExperienceInput}
                                />
                            </div>
                        </div>
                        <hr />
                        <Button
                            form={'experience-form'}
                            title={`Tambah Pengalaman Kerja`}
                            type={'button'}
                            style={{
                                width: '100%',
                                height: '40px',
                                background: 'none',
                                borderRadius: '4px',
                                border: '1px solid #FBB017',
                                color: '#FBB017',
                                fontSize: '14px',
                                fontWeight: 700,
                                // marginTop: '20px',
                                padding: 10
                            }}
                            onClick={handleSubmitExperience}
                        />
                    </form>
                    <form className={`${styles['portfolio']}`}>
                        <h4>Portfolio</h4>
                        <hr />
                        <div className={`${styles['form-experience']}`}>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Nama Aplikasi</label>
                                <Input
                                    placeholder={'Masukkan nama aplikasi'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                            {/* <div className={`${styles['double-input-group']}`}> */}
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Link Repository</label>
                                <Input
                                    placeholder={'PT Nocturnal'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <div
                                className={`${styles['drag-area']}`}
                            // onDragOver={''}
                            >
                                <div className={`${styles.icon}`}><i className="fas fa-cloud-upload-alt"></i></div>
                                <header>Drag & Drop untuk Upload Gambar Aplikasi Mobile</header>
                                <p>Atau cari untuk mengupload file dari direktorimu.</p>
                                <div className={`${styles['img-req']}`}>
                                    <div className={`${styles['img-format']}`}>
                                        <img src="/assets/img/icons/dummy-icon.png" alt=""
                                        />
                                        <p className={`${styles['format-text']}`}>High-Res Image PNG, JPG or GIF</p>
                                    </div>
                                    <div className={`${styles['img-size']}`}>
                                        <img src="/assets/img/icons/expand.png" alt=""
                                        />
                                        <p
                                            className={`${styles['size-text']}`}
                                        >Size 1080x1920 or 600x800</p>
                                    </div>
                                </div>
                                {/* <span>OR</span> */}
                                <button>Browse File</button>
                                <input type="file" hidden />
                            </div>
                        </div>
                        {/* </div> */}
                        <hr />
                        <Button
                            title={`Tambah Portfolio`}
                            type={'button'}
                            style={{
                                width: '100%',
                                height: '40px',
                                background: 'none',
                                borderRadius: '4px',
                                border: '1px solid #FBB017',
                                color: '#FBB017',
                                fontSize: '14px',
                                fontWeight: 700,
                                // marginTop: '20px',
                                padding: 10
                            }}
                        />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditProfJobseeker