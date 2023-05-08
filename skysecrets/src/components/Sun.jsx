import useFetchPost from "../functions/useFetchPost"
import { useContext, useEffect, useState } from "react"
import { LocationContext } from "../context/LocationContext"

const Sun = () => {

  const { location } = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/moon/times', { lat: location[0], lng: location[1] })
  const [times, setTimes] = useState({sunrise: '00:00', sunset: '00:00'})

  useEffect(() => {
    let newTimes = postData
    setTimes(newTimes)
  }, [postData]);  

  return ( 
    <div className="sun-container">
      {postError && <div className="error-message">{ postError }</div>}
      { postIsPending && (<p>Loading...</p>)}
      { !postIsPending && times && (
        <div id="sun">
            <div>
              <img src="https://sdo.gsfc.nasa.gov/assets/img/latest/latest_512_0193.jpg" alt="current sun"/>
            </div>
            <p>Sunrise: {times.sunrise}</p>
            <p>Sunset: {times.sunset}</p>
        </div>
        )}
        <div>
          {location && (<p>Latitude: { location[0].toFixed(4)}</p>)}
          {location && (<p>Longitude: { location[1].toFixed(4)}</p>)}
        </div>
      
    </div>
   );
}

export default Sun;
