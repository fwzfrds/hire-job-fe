import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../../pages/main/Main'
import Page404 from '../../pages/page404/Page404'


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers