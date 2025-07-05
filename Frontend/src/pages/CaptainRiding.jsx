import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
  const[finishRidePanel,setFinishRidePanel]=useState(false);
  const finishRidePanelRef=useRef(null);
  


  useGSAP(()=>{
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[finishRidePanel])
  
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
      <div className='h-4/5'>
        <img className='object-cover w-full h-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      
      {/* Ride Info Panel */}
    
      <div className='relative flex items-center justify-between p-6 pt-10 bg-yellow-400 h-1/5' onClick={()=>{
        setFinishRidePanel(true)

      }}>
        <h5 className='p-1 text-center w-[90%] absolute top-0'>
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='p-3 px-10 font-semibold text-white bg-green-600 rounded-lg'>Complete Ride</button>
      </div>
     
      
      {/* Finish Ride Panel (UI Only) */}
      <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
      <FinishRide setFinishRidePanel={setFinishRidePanel}/>
       
      </div>
    
    </div>
  )
}

export default CaptainRiding