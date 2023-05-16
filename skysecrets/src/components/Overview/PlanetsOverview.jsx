import mercury from '../Planets/img/mercury.png'
import venus from '../Planets/img/venus.png'
import mars from '../Planets/img/mars.png'
import jupiter from '../Planets/img/jupiter.png'
import saturn from '../Planets/img/saturn.png'
import useFetchPost from '../../functions/useFetchPost'
import { useContext } from "react"
import { LocationContext } from "../../context/LocationContext"

const PlanetsOverview = () => {

  const { location } = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/planets', { lat: location[0], lng: location[1] })

  return ( 
    <div className="planets-overview-container">
      <p>Over horizon:</p>
          {postError && (
            <div>An error occurred: {postError}</div>
          )}
          {!postIsPending && postData && (
            <div className="planets-overview-images">
              <div className="round-planets">
                <img className={postData.mercury ? " " : "under-horizon"} src={ mercury } alt="mercury"/>
                <img className={postData.venus ? " " : "under-horizon"} src={ venus } alt="venus"/>
                <img className={postData.mars ? " " : "under-horizon"} src={ mars } alt="mars"/>
                <img className={postData.jupiter ? " " : "under-horizon"} src={ jupiter } alt="jupiter"/>
            </div>
            <img className={postData.saturn ? " " : "under-horizon"} id="saturn" src={ saturn } alt="saturn"/> 
            </div>
          )}
    </div>    
   );
}
 
export default PlanetsOverview;