import React from 'react'
import { Marker } from 'react-leaflet'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'


let DefaultIcon = L.icon ({
  iconUrl: icon,
  shadowUrl: iconShadow
})

const GeoCoderMarker = () => {


  return (
   <Marker position={position} icon={DefaultIcon}>

   </Marker>
  )
}

export default GeoCoderMarker