import React, { useState, useEffect, useRef } from 'react'
import styles from './EditProfJobseeker.module.css'
import Navbar from '../../../components/module/navbar'
import JobSeekerAva from '../../../components/base/jobseekerAva/Image'
import Button from '../../../components/base/button'
import Footer from '../../../components/module/footer/Footer'
import Input from '../../../components/base/input'
import Textarea from '../../../components/base/textarea/Textarea'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { addSkill, getUserSkill, deleteUserSkill, addExperience, deleteUserExp, getUserExperience, updatePersonal, addPortfolio, getUserPortfolio, delUserPorto } from '../../../config/redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/base/loading/Loading'
import NavbarLP from '../../../components/module/navbarLP'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditProfJobseeker = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState('')
    const [authToken, setAuthToken] = useState('')
    const [image, setImage] = useState('')
    const [portoImgPreview, setPortoImgPreview] = useState('')
    const [portoImg, setPortoImg] = useState('')
    const [savePortoImg, setSavePortoImg] = useState('')
    const [saveImg, setSaveImg] = useState('')
    const target = useRef(null)
    const handleClickUpload = () => {
        // console.log(target.current)
        target.current.click()
    }

    // Modal Bootstrap
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    }
    // Modal Bootstrap end

    // State from redux
    const { isLoading, userSkill } = useSelector((state) => state.userSkill)
    const { detailUser } = useSelector((state) => state.userDetail)
    const { userPortfolio } = useSelector((state) => state.userPortfolio)

    console.log(userPortfolio)

    const { isLoading: isLoadingExp, userExperience } = useSelector((state) => state.userExperience)

    // Local state for submit
    const [personalData, setPersonalData] = useState('')

    const [skill, setSkill] = useState({
        skillName: ''
    })

    const [experience, setExperience] = useState({
        jobdesk: '',
        corpName: '',
        workTime: '',
        description: ''
    })

    const [portofolio, setPortofolio] = useState('')

    // Use Effect
    useEffect(() => {
        const dataFromLocal = JSON.parse(localStorage.getItem('PeworldUser'))
        setUserData(detailUser)
        setAuthToken(dataFromLocal.token)
        setImage(detailUser.photo)
    }, []);

    useEffect(() => {
        if (authToken) {
            dispatch(getUserSkill(authToken, navigate))
            dispatch(getUserExperience(authToken, navigate))
            dispatch(getUserPortfolio(authToken, navigate))
        }
    }, [authToken, dispatch, navigate])

    // Personal Data Handling
    const handleDataInput = (e) => {
        e.persist();

        setPersonalData({ ...personalData, [e.target.name]: e.target.value })
    }

    const handleUploadChange = (e) => {
        // console.log(e.target.files[0])
        let uploaded = e.target.files[0]
        setImage(URL.createObjectURL(uploaded))
        setSaveImg(uploaded)
    }

    const cancelChangePhoto = () => {
        setSaveImg('')
        setImage('')
    }

    const handleSubmitPersonal = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        if (saveImg) {
            formData.append('photo', saveImg)
        }

        if (Object.keys(personalData).length > 0) {
            const data = personalData
            Object.keys(personalData).forEach((item) => {
                formData.append(item, data[item])
            })
        }

        try {
            dispatch(updatePersonal(formData, authToken))
        } catch (error) {
            console.log(error.response.data.message);
            swal({
                title: "Add Personal Data Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            });
        }

    }
    // Personal Data Handling End

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
    // Experience handling End

    // Handle Portofolio
    const handlePortoInput = (e) => {
        e.persist()

        if (e.target.files) {
            const uploaded = e.target.files[0]
            setPortoImgPreview(URL.createObjectURL(uploaded))
            setSavePortoImg(uploaded)
        }
        setPortofolio({ ...portofolio, [e.target.name]: e.target.value })
    }

    const handleChangePortoImg = () => {
        setPortoImgPreview('')
        setSavePortoImg('')
    }

    const submitAddPorto = (e) => {
        e.preventDefault()

        let formData = new FormData()

        if (savePortoImg) {
            formData.append('appImage', savePortoImg)
        }

        if (Object.keys(portofolio).length > 0) {
            const data = portofolio
            Object.keys(portofolio).forEach((item) => {
                formData.append(item, data[item])
            })
        }

        dispatch(addPortfolio(formData, authToken, navigate))

        // swal({
        //     title: 'Success',
        //     text: 'Berhasil tambah porto',
        //     icon: 'success'
        // })
    }

    const handlePortoDel = (e, id, name) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: `${name} portfolio will be deleted`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((isOkay => {
            if (isOkay) {
                // console.log('delete experience success')
                dispatch(delUserPorto(authToken, id, name))
            }
        }))

        return false
    }

    // Handle Portofolio End

    // console.log(personalData)
    // console.log(saveImg)
    // console.log(userData)
    console.log(portofolio)
    console.log(portoImgPreview)
    console.log(savePortoImg)

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
                        source={image ? image : '/assets/img/photo.webp'}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            alignSelf: 'center'
                        }}
                    />
                    {saveImg &&
                        <p
                            style={{
                                margin: 0,
                                marginTop: 10,
                                cursor: 'pointer'
                            }}
                            onClick={cancelChangePhoto}
                        >x cancel change</p>
                    }

                    <input
                        style={{
                            display: 'none'
                        }}
                        type={'file'}
                        accept='image/png, image/jpeg, image/jpg'
                        ref={target}
                        onChange={handleUploadChange}
                    />
                    <Button
                        title={`Change Photo`}
                        type={'button'}
                        style={{
                            borderRadius: 5,
                            border: 'none',
                            marginTop: 15,
                            marginBottom: 20
                        }}
                        onClick={handleClickUpload}
                    />
                    <div className={`${styles['about-profile']}`}>
                        <h3 className={`${styles.name}`}>{userData.full_name ? userData.full_name : 'My Name'}</h3>
                        <h6 className={`${styles.position}`}>{userData ? userData.jobdesk : 'Web Developer'}</h6>
                        <div className={`${styles.location}`}>
                            <img src="/assets/img/icons/map-pin.png" alt="" />
                            <p className={`${styles['text-location']}`}>{userData.address ? userData.address : 'Indonesia'}</p>
                        </div>
                        <p className={`${styles.status}`}>Freelancer</p>
                    </div>
                    <Button
                        form={'personal-form'}
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
                        onClick={handleSubmitPersonal}
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
                    <form id='personal-form' className={`${styles['personal-data']}`}>
                        <h4>Data Diri</h4>
                        <hr />
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Nama Lengkap</label>
                            <Input
                                placeholder={userData.full_name ? userData.full_name : 'Masukkan nama lengkap'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                                name={`full_name`}
                                onChange={handleDataInput}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Job desk</label>
                            <Input
                                placeholder={userData.jobdesk ? userData.jobdesk : 'Masukkan job desk'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                                name={`jobdesk`}
                                onChange={handleDataInput}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Domisili</label>
                            <Input
                                placeholder={userData.address ? userData.address : 'Masukkan alamat domisili'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                                name={`address`}
                                onChange={handleDataInput}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Tempat Kerja</label>
                            <Input
                                placeholder={userData.workplace ? userData.workplace : 'Masukkan tempat kerja'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                                name={`workplace`}
                                onChange={handleDataInput}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <Textarea
                                placeholder={userData.description ? userData.description : 'Masukkan deskripsi singkat tentang anda'}
                                labelName={'Deskripsi Singkat'}
                                id={'personal'}
                                name={`description`}
                                onChange={handleDataInput}
                            />
                        </div>
                    </form>
                    <form id='skill-form' className={`${styles['skill']}`}>
                        <h4>Skill</h4>
                        <hr />
                        {Object.keys(userSkill).length === 1 ? 'Updating...' : userSkill.map((skill, idx) => {
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
                        {Object.keys(userExperience).length === 1 ? 'Updating...' : userExperience.map((exp, idx) => {
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
                        })
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
                        {userPortfolio.length > 0 && userPortfolio.map((porto, idx) => {
                            return (
                                <div key={idx} className={`${styles.porto_list}`}>
                                    <p>{porto.app_name}</p>

                                    <div>
                                        <button
                                            onClick={(e) => handleShow(e)}
                                        >
                                            <i className="fa-solid fa-eye"></i>
                                        </button>
                                        <button
                                            onClick={(e) => handlePortoDel(e, porto.id, porto.app_name)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{porto.app_name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className={`${styles.modal_img}`}>
                                                <img src={porto.app_image} alt="" />
                                            </div>
                                            <table className={`${styles.porto_detail}`}>
                                                <tr>
                                                    <td>App Name</td>
                                                    <td>: {porto.app_name}</td>
                                                </tr>
                                                <tr>
                                                    <td>App Type</td>
                                                    <td>: {porto.app_type}</td>
                                                </tr>
                                            </table>
                                            <a
                                                className={`${styles.porto_repo}`}
                                                href={porto.link_repo}
                                                target="_blank" rel="noopener noreferrer">Repository</a>
                                        </Modal.Body>
                                        {/* <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer> */}
                                    </Modal>
                                </div>
                            )
                        })}
                        {userPortfolio && <hr></hr>}
                        <div className={`${styles['form-experience']}`}>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="appName">Nama Aplikasi</label>
                                <Input
                                    placeholder={'Masukkan nama aplikasi'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                    id='appName'
                                    name='appName'
                                    onChange={handlePortoInput}
                                />
                            </div>
                            {/* <div className={`${styles['double-input-group']}`}> */}
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="appType">App Type</label>
                                <Input
                                    placeholder={'ex: mobile or web app'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                    id='appType'
                                    name='appType'
                                    onChange={handlePortoInput}
                                />
                            </div>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="linkRepo">Link Repository</label>
                                <Input
                                    placeholder={'ex: https://github.com/blablabla'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                    id='linkRepo'
                                    name='linkRepo'
                                    onChange={handlePortoInput}
                                />
                            </div>
                        </div>
                        <div className={`${styles['input-group']}`}>
                            {portoImgPreview ?
                                <>
                                    <div className={`${styles.prevPortoImg}`}>
                                        <img src={portoImgPreview} alt="" />
                                    </div>
                                    <p className={`${styles.change_photo}`}
                                        onClick={handleChangePortoImg}
                                    >Change Photo</p>
                                </>
                                :
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
                                    <label htmlFor='appImage'>Browse File</label>
                                    <input type="file" id='appImage' name='appImage' onChange={handlePortoInput} hidden />
                                </div>
                            }
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
                            onClick={submitAddPorto}
                        />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditProfJobseeker