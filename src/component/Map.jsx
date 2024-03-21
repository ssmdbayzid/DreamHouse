import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import GeoCoderMarker from './GeoCoderMarker'

const Map = ({location, city, country}) => {
    const position = [51.505, -0.09]

    console.log(location, city, country)
  return (
    <MapContainer
     center={position}
     zoom={13} 
     scrollWheelZoom={false}
     style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
        background: "green"
     }}
     >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoCoderMarker address={`${"address"} ${"city"} ${"country"}`} />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
  )
}

export default Map