import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export const Map = ({data}) => {
    const mapStyles ={
        height:"50vh",
        width:"100%"
    }

    const defaultCenter ={
        lat: data.lag, lng: data.lng
    }
    return (
     <LoasScript googleMapsApiKey= 'AIzaSyCmvkXB_DMBUNwxQztLMStyQmA_szbNw'>
         <GoogleMap
            
            mapContainerStyle={mapStyles}
            zoom ={9}
            center ={defaultCenter}>
          <Marker position ={defaultCenter}/>
         </GoogleMap>
     </LoasScript>
   
     )
}

