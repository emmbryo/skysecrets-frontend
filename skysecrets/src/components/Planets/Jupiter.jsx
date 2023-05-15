import jupiter from './img/jupiter.png'
import { useState } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { useContext } from "react"
import { LocationContext } from "../../context/LocationContext"

const Jupiter = () => {

  const [showInfo, setShowInfo] = useState(false)
  const {location} = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/planets/jupiter', { lat: location[0], lng: location[1] })

  const handleClick = (event) => {
    setShowInfo(!showInfo)
  }

  return ( 
    <div className="jupiter-container">
      <h3>Jupiter</h3>
      {postIsPending && (
        <div>Loading...</div>
      )}
      {postError && (
        <div>an error occurred: {postError}</div>
      )}
      {!postIsPending && postData.planetOverHorizon && (
        <div>
          <p>Over horizon!</p>
        </div>
      )}
      {!postIsPending && !postData.planetOverHorizon && (
        <div>
          <p>Not over horizon :(</p>
        </div>
      )}
      <div id="jupiter" className="planet">
        <img src={jupiter} alt="jupiter" />
        {!showInfo && (
          <button className="planet-button" onClick={handleClick}>Show info</button>
        )}
        {showInfo && (
          <div className="show-planet-info">
            <table className="planet-table">
          <tbody>
            <tr>
              <td>Mass:</td>
              <td>--- kg</td>
            </tr>
            <tr>
              <td>Diameter:</td>
              <td>--- m</td>
            </tr>
            <tr>
              <td>Sun distance:</td>
              <td>--- m</td>
            </tr>
          </tbody>
        </table>
        <button className="planet-button" onClick={handleClick}>Hide info</button>
          </div>
          
        )}        
      </div>
    </div>
   );
}
 
export default Jupiter;