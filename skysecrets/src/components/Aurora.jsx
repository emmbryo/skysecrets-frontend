import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LocationContext } from '../context/LocationContext'
import useFetch from '../functions/useFetch'
import useFetchPost from '../functions/useFetchPost'
import { useState } from 'react'

const Aurora = () => {

  const {location} = useContext(LocationContext)
  const {data , isPending, error} = useFetch('http://localhost:8080/api/v1/aurora')
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/aurora/chance', { lat: location[0], lng: location[1] })
  const [show, setShow] = useState(false)

  const handleClick = (event) => {
    setShow(!show)
  }

  return ( 
    <div className="aurora">
      <div className="aurora-probability">
      {postIsPending && (<p>Loading...</p>)}
      {postError && (<p>An error occured: { postError }</p>)}
      {!postIsPending && postData && (
        <div>
          <p>Chances for aurora at current position</p>
        </div>
      )} 
      {!postIsPending && !postData && !postError &&(
        <div>
          <p>Very low chances for aurora at current position</p>
        </div>
      )}
      </div>
      {location[0] >= 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" alt="aurora" />)}
      {location[0] < 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-southern-hemisphere.jpg" alt="aurora" />)}
      {isPending && (<p>Loading...</p>)}
      {error && (<p>An error occured: { error }</p>)}
      {!isPending && data && show && (
        <div className="aurora-data">
          <div className="solarwind-data">
            <p>Solarwind</p>
            <p>Speed: {data.solarWind.speed}</p>
            <p>Density: {data.solarWind.density}</p>
          </div>
          <div className="magnetic-data">
            <p>Magnetic field</p>
            <p>Bt: {data.magneticField.power}</p>
            <p>Bz: {data.magneticField.zComponent}</p>
          </div>
          <div className="planetary-index">
            <p>Planetary index</p>
            <p>Kp: {data.Kp.index}</p>
            <Link to='/index'>More on planetary index</Link>
          </div>
          <button className="hide-aurora-info" onClick={handleClick}>Hide info</button>
        </div>
      )}
      {!show && (<button className="show-aurora-info" onClick={handleClick}>Show info</button>)}
    </div>
   );
}
 
export default Aurora;