import { useContext } from "react"
import { LocationContext } from "../context/LocationContext"
import globe from '../img/earth.png'

const Location = () => {

  const { location } = useContext(LocationContext)
  return ( 
    <div className="location-container">
      <img src={globe} alt="marker" />
      <div className="coordinates">
        <p>lat: {location[0].toFixed(2)}</p>
        <p>lng: {location[1].toFixed(2)}</p>
      </div>
      
    </div> 
  );
}
 
export default Location;