import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import iconImage from '../img/placeholder.png'

const Map = () => {

  const vasaMuseet = [59.32915892217842, 18.093897700309757]
  const [position, setPosition] = useState(vasaMuseet)
  const [showCoord, setShowCoord] = useState(false)
  const customIcon = new Icon({
    iconUrl: iconImage,
    iconSize: [38, 38]
  })

  const handleCLick = (event) => {
    setPosition([event.latlng.lat, event.latlng.lng])
  }

  const handleSubmit = (event) => {
    console.log(position)
    setShowCoord(true)
  }

  function MapEvents({ handleClick }) {
    useMapEvents({
      click: handleCLick
    })
    return null
  }

  return ( 
    <div className="map-container">
      <MapContainer 
        center={vasaMuseet} 
        zoom={4} 
        onClick={handleCLick}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && <Marker position={position} icon={customIcon}>
            <Popup>
              <h2>
                Popup!
              </h2>
            </Popup>
          </Marker>}
          <MapEvents handleClick={handleCLick} />     
      </MapContainer>
      <div className="map-footer">
        <button onClick={handleSubmit}>Set position</button>
        {showCoord && 
          ( <div className="position-coord">
            <p>latitude: {position[0]}</ p> 
            <p>longitude: {position[1]} </p>
          </div> )}
      </div>
      

    </div>
   );
}
 
export default Map;