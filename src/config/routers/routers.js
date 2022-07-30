import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginJobSeeker from '../../pages/jobseeker/login/LoginJobseeker'
import RegisterJobseeker from '../../pages/jobseeker/register/RegisterJobseeker'
import RegisterRecruiter from '../../pages/recruiter/register/RegisterRecruiter'
// import Main from '../../pages/main/Main'
import Page404 from '../../pages/page404/Page404'
import LoginRecruiter from '../../pages/recruiter/login/LoginRecruiter'
import HomeRecruiter from '../../pages/recruiter/home/HomeRecruiter'
import ResetPassJobseeker from '../../pages/jobseeker/resetPassword/ResetPassJobseeker'
import ResetPassRecruiter from '../../pages/recruiter/resetPassword/ResetPassRecruiter'
import ProfileJobseeker from '../../pages/jobseeker/profile/ProfileJobseeker'
import Portfolio from '../../components/module/portfolio/Portfolio'
import Experience from '../../components/module/experience/Experience'
import EditProfJobseeker from '../../pages/jobseeker/editProfile/EditProfJobseeker'
import IsUserLogin from '../../helper/isUserLogin'
import LandingPage from '../../pages/landing page/landingPage'
import AuthUser from '../../helper/isUser'
import IsRecruiter from '../../helper/isRecruiter'
import IsRecruiterLogin from '../../helper/isRecruiterLogin'

// Dari Jaey
import Profile from '../../pages/recruiter/profile';
import ProfileEdit from '../../pages/recruiter/profileEdit';
import Hiring from '../../pages/recruiter/hiring/hiring';
import Notification from '../../pages/jobseeker/notification/notification';
import Testing from '../../pages/testing/testing';

// import Router2 from './index';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/index" element={<Router2 />} /> */}
        <Route path="/jobseeker/register" element={<RegisterJobseeker />} />
        <Route path="/recruiter/register" element={<RegisterRecruiter />} />
        <Route path="/jobseeker/login" element={<IsUserLogin> <LoginJobSeeker /> </IsUserLogin>} />
        <Route path="/jobseeker/edit/:id" element={<AuthUser> <EditProfJobseeker/></AuthUser>} />
        <Route path="/recruiter/jobseeker-profile/:id" element={<IsRecruiter> <ProfileJobseeker /> </IsRecruiter>}>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="/jobseeker/reset-password" element={<ResetPassJobseeker />} />
        <Route path="/recruiter/login" element={<IsRecruiterLogin> <LoginRecruiter /> </IsRecruiterLogin>} />
        <Route path="/recruiter/home" element={<HomeRecruiter />} />
        <Route path="/recruiter/reset-password" element={<ResetPassRecruiter />} />

        {/* Dari Jaey */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path='/hire/:id' element={<Hiring />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/test' element={<Testing />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers