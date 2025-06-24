import React from "react";

//This component is used to display the confirmed vehicle details
//After the user selects a vehicle,this component will be rendered to show the confirmation of the selected vehicle.

const ConfirmRide = (props) => {
  return (
    <div>
      {/* Close Arrow */}
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>props.setConfirmRidePanel(false)}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Confirm your Ride</h3>

      <div className="flex flex-col items-center justify-between gap-2">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹200</h3>
              <p className="-mt-1 text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button
  onClick={() => {
   
      props.setVehicleFound(true);
      props.setConfirmRidePanel(false);
    }
  }
  className="w-full p-2 mt-5 font-semibold text-white bg-green-600 rounded-lg"
>
  Confirm
</button>
       
      </div>
    </div>
  );
};

export default ConfirmRide;
