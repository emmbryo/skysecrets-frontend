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
      {postIsPending && (<p>Loading...</p>)}
      {!postIsPending && times && (
        <div id="sun">
            <div className="sun-image">
              <img src="https://sdo.gsfc.nasa.gov/assets/img/latest/latest_512_0193.jpg" alt="current sun"/>
            </div>
            <div>
              <p>&uarr; {postData.sunrise}</p>
              <p>&darr; {postData.sunset}</p>
            </div>
        </div>
        )}
    </div>
   );
}

export default Sun;
