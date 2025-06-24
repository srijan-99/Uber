import React, { useState, useRef } from "react";

//gSAP ek animation library h jiski madad
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

//import remix icon
import "remixicon/fonts/remixicon.css";

//import components
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";
import VehiclePanel from "../components/VehiclePanel.jsx";
import ConfirmedRide from "../components/ConfirmedRide.jsx";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver  from "../components/WaitingForDriver"

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  //For naming the red box
  //Kisi bhi element ko select karne ke liye useRef ka use karte hai uski madad se hum uss element ko reference kar sakte hai
  //Pehle hum useRef ki jagah document.getElementById() ka use karte the lekin useRef se humara code clean aur readble hota hai
  // Aur useRef se humara component re-render nahi hota hai jab bhi hum uss element ko change karte hai to useRef se humara performance bhi improve hota hai

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef=useRef(null);
  //Vehicle Panel tab khulega jab aap location select karenge
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  //Looking  for a Driver Panel
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver,setWaitingForDriver]=useState(false);


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

  //Using GSAP for Panel Animation
  //useGsap ek custom hook h jo gsap jiski madad se animation ko handle karte hai

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="relative h-screen overflow-hidden bg-gray-100">
      <img
        className="fixed w-16 left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="absolute top-0 flex flex-col justify-end w-full h-screen">
        <div className="h-[30%] p-6 bg-white relative">
          {/* Arrow Toggle */}

          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute text-xl opacity-0 right-6 top-6"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form className="relative py-3" onSubmit={submitHandler}>
            <input
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={handlePickupChange}
              className="bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mb-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mb-3"
              type="text"
              placeholder="Enter your destination"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 mt-3 text-white bg-black rounded-lg"
            >
              Find Trip
            </button>
          </form>
        </div>
        <div
          ref={panelRef}
          panelOpen={panelOpen}
          vehiclePanel={vehiclePanel}
          setVehiclePanel={setVehiclePanel}
          className="mt-15 bg-white-500 h-70"
        >
          <LocationSearchPanel
            onLocationSelect={handleLocationSelect}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white"
      >
       <ConfirmedRide
  setVehicleFound={setVehicleFound}
  setConfirmRidePanel={setConfirmRidePanel}
/>
      </div>

      {/* Looking for driver to accept your ride  */}

      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white"
      >
        <LookingForDriver
        setVehicleFound={setVehicleFound}
         />
      </div>
      
      {/* Waiting For Driver */}
      <div 
       ref={waitingForDriverRef}
        
        className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 bg-white"
      >
        <WaitingForDriver
        setWaitingForDriver={setWaitingForDriver}
      
         />
      </div>


    
    </div>
  );
};

export default Home;

// Purpose:
// This component is the main page for booking a ride, similar to the Uber app.

// State Management:

// pickup and destination: Store the user's input for pickup and destination locations.
// panelOpen: Controls whether the location search panel is open.
// vehiclePanel: Controls whether the vehicle selection panel is open.
// Refs:

// panelRef: References the location search panel for animation.
// panelCloseRef: References the close arrow for animation.
// vehiclePanelRef: References the vehicle selection panel for animation.
// Animation:
// Uses GSAP (GreenSock Animation Platform) to smoothly animate the opening and closing of panels using refs.

// User Flow:

// User enters or clicks on pickup/destination input.
// Location search panel slides up (animated).
// User selects a location, which updates the state and opens the vehicle selection panel.
// User can close the panel using the arrow.
// Submitting the form shows an alert with the selected locations.
// Components Used:

// LocationSearchPanel: For searching and selecting locations.
// VehiclePanel: For selecting a vehicle after location is chosen.
// In short:
// This code manages the ride booking UI, using state for user input and refs for smooth panel animations, providing a user-friendly experience similar to a real ride-hailing app.
