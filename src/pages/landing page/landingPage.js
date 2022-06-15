import React from 'react'
import Button from '../../components/base/button'
import NavbarLP from '../../components/module/navbarLP'
import styles from '../../assets/css/landingPage.module.css'

import ads1 from './advert1.png'
import ads2 from './advert2.png'
import ads3 from './advert3.png'
import tick1 from './tickPurple.png'
import tick2 from './tickYellow.png'
import testimony1 from './testimony1.png'
import testimony2 from './testimony2.png'
import testimony3 from './testimony3.png'
import Footer from '../../components/module/footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <NavbarLP />

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className='container' style={{display: 'flex', alignItems: 'center', marginTop: '60px'}}>
                <div style={{width: '45%'}}>
                    <p style={{fontSize: '44px', fontWeight: '600'}}>Talenta terbaik negeri untuk perubahan revolusi 4.0</p>
                    <p style={{color: '#46505C', marginBottom: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla maiores optio laudantium veritatis non sed.</p>
                    <Button 
                    className={styles['register-button']}
                    title='Mulai Dari Sekarang'
                    />
                </div>
                <div style={{width: '50%'}}>
                    <img src={ads1} alt='' style={{width: '100%', marginLeft: '110px'}}/>
                </div>
            </div>

            <div className='container' style={{display: 'flex', alignItems: 'flex-start', marginTop: '60px'}}>
                <div style={{width: '50%'}}>
                    <img src={ads2} alt='' style={{width: '100%'}}/>
                </div>
                <div style={{width: '50%',  marginLeft: '50px', marginTop: '30px'}}>
                    <p style={{fontSize: '36px', fontWeight: '600', marginBottom: '30px'}}>Kenapa Harus mencari talent di peworld</p>
                    <div className={styles.reasonry}>
                        <img src={tick1} alt=''/>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>

                    <div className={styles.reasonry}>
                        <img src={tick1} alt=''/>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>

                    <div className={styles.reasonry}>
                        <img src={tick1} alt=''/>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>

                    <div className={styles.reasonry}>
                        <img src={tick1} alt=''/>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
            </div>

            <div className='container' style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '60px'}}>
                <div style={{width: '35%', marginRight: '15px'}}>
                    <span style={{fontSize: '36px', fontWeight: '600'}}>Skill Talent</span>
                    <p style={{color: '#46505C', marginTop: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem culpa aperiam expedita temporibus earum.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>Java</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>Kotlin</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>PHP</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>JavaScript</span>
                            </div>
                        </div>

                        <div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>Golang</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>C++</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>Ruby</span>
                            </div>
                            <div className={styles.skillset}>
                                <img src={tick2} alt=''/>
                                <span>10+ Bahasa lainnya</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <img src={ads3} alt='' style={{width: '100%'}}/>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', backgroundColor: '#46505C0E'}}>
                <span style={{fontSize: '30px', fontWeight: '600', margin: '60px 0 0'}}>Their opinion about Peworld</span>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles.testimony}>
                        <div style={{width: '40%', margin: '20px 0'}}>
                            <img src={testimony1} alt='' style={{width: '100%'}}/>
                        </div>
                        <span>Harry Styles</span>
                        <span>Web Developer</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Vero facilis quo excepturi nostrum autem?</p>
                    </div>

                    <div className={styles.testimony}>
                        <div style={{width: '40%', margin: '20px 0'}}>
                            <img src={testimony2} alt='' style={{width: '100%'}}/>
                        </div>
                        <span>Niall Horan</span>
                        <span>Web Developer</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, aspernatur! Labore rerum quam eos fugit exercitationem.</p>
                    </div>

                    <div className={styles.testimony}>
                        <div style={{width: '40%', margin: '20px 0'}}>
                            <img src={testimony3} alt='' style={{width: '100%'}}/>
                        </div>
                        <span>Louis Tomlinson</span>
                        <span>Web Developer</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi nihil ea accusamus voluptas praesentium adipisci.</p>
                    </div>
                </div>
            </div>

            <div className='container' style={{ marginTop: '100px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={styles['register-banner']}> 
                        <p style={{width: '25%'}}>Lorem ipsum dolor sit amet.</p>
                        <Button 
                        className= {styles['banner-button']}
                        title= 'Mulai Dari Sekarang'
                        />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default LandingPage