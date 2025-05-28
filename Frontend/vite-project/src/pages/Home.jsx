import React, { useState, useRef } from 'react';

//For animation
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

//import remix icon
import 'remixicon/fonts/remixicon.css'

//import components
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'
import VehiclePanel from '../components/VehiclePanel.jsx'


const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    //For naming the red box
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const [vehiclePanel, setVehiclePanel] = useState(false);

    // Handler for when a location is selected from the panel
    const handleLocationSelect = (location) => {
        setPickup(location); // or setDestination(location) if needed
        setPanelOpen(false);
        setVehiclePanel(true);
    };

    const handlePickupChange = (e) => {
        setPickup(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // You can add your own logic here
        alert(`Pickup: ${pickup}\nDestination: ${destination}`);
    };
    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 24
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])

    return (
        <div className='h-screen relative overflow-hidden bg-gray-100'>
            <img className='w-16 fixed left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                   

                   {/* Arrow Toggle */}

                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute right-6 top-6 text-xl opacity-0'>
                    <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={submitHandler}>
                        <input
                            value={pickup}
                            onClick={() => setPanelOpen(true)}
                            onChange={handlePickupChange}
                            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mb-3'
                            type='text'
                            placeholder='Add a pick-up location'
                        />
                        <input
                            value={destination}
                            onClick={() => setPanelOpen(true)}
                            onChange={handleDestinationChange}
                            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mb-3'
                            type='text'
                            placeholder='Enter your destination'
                        />
                        <button
                            type='submit'
                            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                            Find Trip
                        </button>
                    </form>
                </div>
                <div ref={panelRef}  panellOpen={panelOpen}vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} className='bg-white-500 h-70 mt-20'>
                    <LocationSearchPanel
                        onLocationSelect={handleLocationSelect}
                        setVehiclePanel={setVehiclePanel}
                    />
                </div>

            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
            <VehiclePanel  setVehiclePanel={setVehiclePanel}/>
            </div>

           
        </div>
    );
};

export default Home;