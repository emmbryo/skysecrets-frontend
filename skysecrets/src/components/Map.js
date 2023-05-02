import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import iconImage from '../img/placeholder.png'
import { useHistory } from 'react-router-dom'

const Map = () => {

  const vasaMuseet = [59.32915892217842, 18.093897700309757]
  const [position, setPosition] = useState(vasaMuseet)
  const [showCoord, setShowCoord] = useState(false)
  const customIcon = new Icon({
    iconUrl: iconImage,
    iconSize: [38, 38]
  })
  const history = useHistory()

  const handleCLick = (event) => {
    setPosition([event.latlng.lat, event.latlng.lng])
    setShowCoord(true)
  }

  const handleSubmit = (event) => {
    console.log('I handle submit', position)

    const locationObject = {
      location: {
        lat: position[0],
        lng: position[1]
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
    history.push('/moon')

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
        center={vasaMuseet} 
        zoom={3} 
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
        <button onClick={handleSubmit}>Set location</button>
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