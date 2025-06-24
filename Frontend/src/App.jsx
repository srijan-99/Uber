




import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'

import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
// import CaptainProtectWrapper from './Context/CaptainContext/CaptainProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'

import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
     

        <Route path='/signup' element={<UserSignup />} />
        <Route path='/riding' element={
          <UserProtectedWrapper>
            <Riding/>
          </UserProtectedWrapper>
        }/>
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home'
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          } />
       
          <Route path='/captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome/>
            </CaptainProtectWrapper>
          } />
       
     
      </Routes>
    </div>
  )
}

export default App