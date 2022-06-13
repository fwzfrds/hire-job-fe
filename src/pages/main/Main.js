import React from 'react'
import {Link} from 'react-router-dom'
import JobSeekerAva from '../../components/base/jobseekerAva/Image';
import Logo from '../../components/base/logo/Logo';
import SkillTag from '../../components/base/skillTag/SkillTag';
import SocmedInfo from '../../components/base/socmedInfo/SocmedInfo';
import Textarea from '../../components/base/textarea/Textarea';
import Banner from '../../components/module/banner/Banner';
import Card from '../../components/module/card/Card';
import Footer from '../../components/module/footer/Footer';
import LoginJobSeeker from '../jobseeker/login/LoginJobseeker';

const Main = () => {
    return (
        <div
            style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 30,
                width: '100vw',
                minHeight: '100vh'
             }}
        >
            <Link to='/recruiter/login'>Company</Link>
            <Link to='/jobseeker/login'>Jobseeker</Link>
        </div>
    )
}

export default Main