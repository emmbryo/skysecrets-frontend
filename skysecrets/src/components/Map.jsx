import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useContext } from 'react'
import iconImage from '../img/placeholder.png'
import { useHistory } from 'react-router-dom'
import { LocationContext } from '../context/LocationContext'

const Map = () => {

  const [showCoord, setShowCoord] = useState(false)
  const customIcon = new Icon({
    iconUrl: iconImage,
    iconSize: [38, 38]
  })
  const history = useHistory()
  const {location, setLocation} = useContext(LocationContext)

  const handleCLick = (event) => {
    setLocation([event.latlng.lat, event.latlng.lng])
    setShowCoord(true)
  }

  const handleSubmit = (event) => {
    console.log('I handle submit', location)

    const locationObject = {
      location: {
        lat: location[0],
        lng: location[1]
      }
    }
    fetch('http://localhost:8080/api/v1/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locationObject)
    }).then(response => {
      if(!response.ok) {
        throw Error('Something went wrong with the fetch.')
      }
      return response.json()
    }).then(data => {
      console.log('fetch klart: ', data)
    })
    setShowCoord(true)
    history.push('/overview')

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
        className='map'
        center={location} 
        zoom={3} 
        onClick={handleCLick}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && <Marker position={location} icon={customIcon}>
            <Popup>
              <h2>
                Popup!
              </h2>
            </Popup>
          </Marker>}
          <MapEvents handleClick={handleCLick} />     
      </MapContainer>
      <div className="map-footer">
        <button id="map-button" onClick={handleSubmit}>Set location</button>
        {showCoord && 
          ( <div className="position-coord">
            <p>latitude: {location[0].toFixed(4)}</ p> 
            <p>longitude: {location[1].toFixed(4)} </p>
          </div> )}
      </div>
      

    </div>
   );
}
 
export default Map;