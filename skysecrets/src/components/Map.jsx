/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useContext } from 'react'
import iconImage from '../img/placeholder.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Location from './Location'

/**
 * Map component.
 *
 * @returns {object} react component.
 */
const Map = () => {
  const customIcon = new Icon({
    iconUrl: iconImage,
    iconSize: [38, 38]
  })
  const history = useHistory()
  const { location, setLocation, user } = useContext(UserContext)
  const locationPayload = {
    location: {
      lat: location[0],
      lng: location[1]
    }
  }

  /**
   * Updates the location.
   *
   * @param {object} event - the triggering event.
   */
  const handleCLick = (event) => {
    setLocation([event.latlng.lat, event.latlng.lng])
  }

  /**
   * Sumbmits the location.
   *
   * @param {object} event - the triggering event.
   */
  const handleSubmit = async (event) => {
    const account = await getAccountId()
    console.log(account)
    await updateLocation(account)
    // history.push('/user')
  }

  /**
   * Gets the account id.
   *
   * @returns {object} account id.
   */
  const getAccountId = async () => {
    const urlGetId = `${process.env.REACT_APP_API_BASE_URL}/account/`
    const responseId = await fetch(urlGetId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    if (!responseId.ok) {
      throw new Error('Something went wrong with the fetch')
    }
    const account = await responseId.json()
    return account
  }

  /**
   * Updates location.
   *
   * @param {object} account - ...
   */
  const updateLocation = async (account) => {
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/account/${account.accountId}`
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(locationPayload)
      })
      if (!response.ok) {
        throw new Error('Something went wrong with the fetch')
      }
      history.push('/overview')
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Activates click events from Map.
   *
   * @param {object} handleClick - function.
   * @param {object} handleClick.handleClick funtion.
   * @returns {boolean} true - click allowed.
   */
  function MapEvents ({ handleClick }) {
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
      { user && (
        <div className="map-footer">
          <button id="map-button" onClick={handleSubmit}>Save location</button>
          <Location />
        </div>
      )}
      { !user && (
        <div className="image-login-promt">
          <p>Want to save your position?</p>
          <button className="save-img-button" onClick={() => history.push('/user')}>Go to login page</button>
        </div>
      )}
    </div>
  )
}
export default Map
