import mercury from "./img/mercury.png"
import earth from './img/earth.png'
import { useState } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { useContext } from "react"
import { LocationContext } from "../../context/LocationContext"

const Mercury = () => {

  const [showInfo, setShowInfo] = useState(false)
  const {location} = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/planets/mercury', { lat: location[0], lng: location[1] })

  const handleClick = (event) => {
    setShowInfo(!showInfo)
  }

  return ( 
    <div className="mercury-container">
      <h3>Mercury</h3>
      {postIsPending && (
        <div>Loading...</div>
      )}
      {postError && (
        <div>an error occurred: {postError}</div>
      )}
      {!postIsPending && postData.planetOverHorizon && (
        <div className="horizon-info">
          <p>Over horizon!</p>
        </div>
      )}
      {!postIsPending && !postData.planetOverHorizon && (
        <div className="horizon-info">
          <p>Not over horizon :(</p>
        </div>
      )}
      <div className="planet" id="mercury">
       <img src={mercury} alt="mercury" /> 
       {!showInfo && (
          <button className="planet-button" onClick={handleClick}>Show info</button>
        )}
        {showInfo && (
          <div className="show-planet-info">
            <table className="planet-table">
              <tbody>
                <tr>
                  <td>Orbital period</td>
                  <td>88.0 d</td>
                  <td className="earth-compare">
                    0.24
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Surface gravity</td>
                  <td>3.7 m/s<sup>3</sup></td>
                  <td className="earth-compare">
                    0.38
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>3.3 * 10<sup>23</sup> kg</td>
                  <td className="earth-compare">
                    0.06
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>6.1 * 10<sup>10</sup> km<sup>3</sup></td>
                  <td className="earth-compare">
                    0.06
                    <img src={earth} alt="earth" />
                  </td>
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
 
export default Mercury;