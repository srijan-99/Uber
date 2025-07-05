import React from 'react'
import { Link } from 'react-router-dom'



const FinishRide = (props) => {

   
    return (
       <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
              props.setFinishRidePanel(false)
            }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='mb-5 text-2xl font-semibold'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-3 mt-4 border-2 border-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3 '>
                    <img className='object-cover w-12 h-12 rounded-full' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium capitalize'>John</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex flex-col items-center justify-between gap-2'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='-mt-1 text-sm text-gray-600'>Pickup Location</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='-mt-1 text-sm text-gray-600'>Destination</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹200</h3>
                            <p className='-mt-1 text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-6'>
              
                
                    <Link to='/captain-home'>
                        <button
                            type="button"
                            
                            className='flex justify-center w-full p-3 mt-5 text-lg font-semibold text-white bg-green-600 rounded-lg'
                        >Finish Ride</button>
                    </Link>
                   
                   
                </div>
            </div>
        </div>
    )
}

export default FinishRide