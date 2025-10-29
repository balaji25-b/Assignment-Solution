import React from 'react'
import {MapContainer, TileLayer, Marker, Polyline, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './index.css'

// Custom icon for vehicle marker
const vehicleIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

/**
 * MapView component renders the Leaflet map,
 * displays the vehicle route polyline,
 * and markers for start, end, and current vehicle position.
 */
function MapView({route, vehiclePosition, start, end}) {
  if (!route.length) return null
  const markerPosition = [vehiclePosition.latitude, vehiclePosition.longitude]
  const polyline =
    route.length >= 2 ? route.map(pt => [pt.latitude, pt.longitude]) : []
  const startPos = [start.latitude, start.longitude]
  const endPos = [end.latitude, end.longitude]

  return (
    <div className="map-container">
      <MapContainer
        center={startPos}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '100%', width: '100%'}}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {polyline.length >= 2 && <Polyline positions={polyline} color="blue" />}
        <Marker position={startPos}>
          <Popup>Start: Hyderabad Junction</Popup>
        </Marker>
        <Marker position={endPos}>
          <Popup>End: Charminar</Popup>
        </Marker>
        <Marker position={markerPosition} icon={vehicleIcon}>
          <Popup>Vehicle live position</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView
