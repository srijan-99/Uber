import React from 'react'




const LocationSearchPanel=(props)=>{

    //sample array for Location
    const locationData=[

        "24B, Near Kapoor cafe ,New Delhi",
        "22B, Near Malhotra cafe ,New Delhi",
        "20B, Near Singhania cafe ,New Delhi",
        "16B, Near Kapoor cafe ,New Delhi",
        "14B, Near Sharma cafe ,New Delhi"

    ]

  
    return(
        <>
      
            {locationData.map((ele)=>{
                return(
                    <div  key={ele} onClick={()=>{
                        if (props.onLocationSelect) props.onLocationSelect(ele);
                        if (props.setVehiclePanel) props.setVehiclePanel(true);
                    }}   className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2><i className="bg-[#eee]flex items-center ri-map-pin-fill"></i> </h2>
                        <h4 className='font-medium'>{ele}</h4>

                    </div>
                )

            })}
        
        </>
    )
}
export default LocationSearchPanel