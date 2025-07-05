import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopup' 

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const ridePopupRef = useRef(null)
  


  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(() => {
    if (ridePopupPanel) {
      // If ridePopupPanel is true, animate the popup to slide up
      gsap.to(ridePopupRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      // If ridePopupPanel is false, animate the popup to slide down (hide)
      gsap.to(ridePopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  // Uncomment this block if you use ConfirmRidePopUp
  
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])
  

  return (
    <div className='h-screen'>
      {/* Top Bar */}
      <div className='fixed top-0 flex items-center justify-between w-screen p-6'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className='flex items-center justify-center w-10 h-10 bg-white rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Main Image */}
      <div className='h-3/5'>
        <img className='object-cover w-full h-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      {/* Captain Details */}
      <div className='p-6 h-2/5'>
        <CaptainDetails />
      </div>
      {/* Ride Popup Panel */}
      <div ref={ridePopupRef} className='fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white'>
        <RidePopup setRidePopupPanel={setRidePopupPanel}
        setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      {/* Uncomment below for Confirm Ride Popup Panel */}
      
      <div ref={confirmRidePopupPanelRef} className='fixed bottom-0 z-10 w-full h-screen px-3 py-10 pt-12 translate-y-full bg-white'>
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
     
    </div>
  )
}

export default CaptainHome