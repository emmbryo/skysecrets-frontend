import { useContext, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import useFetch from '../functions/useFetch'
import useFetchPost from '../functions/useFetchPost'

/**
 * Aurora component.
 *
 * @returns {object} react component.
 */
const Aurora = () => {
  const { location } = useContext(UserContext)
  const { data, isPending, error } = useFetch('http://localhost:8080/api/v1/aurora')
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/aurora/analysis', { lat: location[0], lng: location[1] })
  const [show, setShow] = useState(false)

  /**
   * Toggles show.
   */
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="aurora">
      <div className="aurora-probability">
      {postIsPending && (<p>Loading...</p>)}
      {postError && (<p>An error occured: { postError }</p>)}
      {!postIsPending && postData.chance && (
        <div>
          <p>Chances for aurora at current position!</p>
        </div>
      )}
      {!postIsPending && !postData.chance && !postError && (
        <div>
          <p>Very low chances for aurora at current position, because:</p>
          <ul>
            {postData.reasons.map(reason => {
              return (
                <li key={reason.id}>{reason.text}</li>
              )
            })}
          </ul>
        </div>
      )}
      </div>
      {location[0] >= 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" alt="aurora" />)}
      {location[0] < 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-southern-hemisphere.jpg" alt="aurora" />)}
      {isPending && (<p>Loading...</p>)}
      {error && (<p>An error occured: { error }</p>)}
      {!isPending && data && show && (
        <div className="aurora-data">
          <div className="solar-magnetic-container">
            <div className="solarwind-data">
            <p>Solarwind</p>
            <p>Speed: {data.solarWind.speed} km/s</p>
            <p>Density: {data.solarWind.density} cm<sup>-3</sup></p>
          </div>
          <div className="magnetic-data">
            <p>Magnetic field</p>
            <p>Bt: {data.magneticField.power} nT</p>
            <p>Bz: {data.magneticField.zComponent} nT</p>
          </div>
          </div>
          <div className="planetary-index">
            <p>Planetary index: {data.Kp.index}</p>
            <Link to='/index' id="index-link">&rarr;More on planetary index</Link>
          </div>
          <p></p>
          <button className="hide-aurora-info" onClick={handleClick}>Hide info</button>
        </div>
      )}
      {!show && (<button className="show-aurora-info" onClick={handleClick}>Show info</button>)}
    </div>
  )
}

export default Aurora
