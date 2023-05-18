import venus from "./img/venus.png"
import { useState } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { useContext } from "react"
import { LocationContext } from "../../context/LocationContext"
import earth from './img/earth.png'

const Venus = () => {

  const [showInfo, setShowInfo] = useState(false)
  const {location} = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/planets/venus', { lat: location[0], lng: location[1] })

  const handleClick = (event) => {
    setShowInfo(!showInfo)
  }

  return ( 
    <div className="venus-container">
      <h3>Venus</h3>
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
      <div className="planet" id="venus">
        <img src={venus} alt="venus" />
        {!showInfo && (
          <button className="planet-button" onClick={handleClick}>Show info</button>
        )}
        {showInfo && (
          <div className="show-planet-info">
            <table className="planet-table">
              <tbody>
                <tr>
                  <td>Orbital period</td>
                  <td>225 d</td>
                  <td className="earth-compare">
                    0.62
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Surface gravity</td>
                  <td>8.87 m/s<sup>3</sup></td>
                  <td className="earth-compare">
                    0.90
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>4.9 * 10<sup>24</sup> kg</td>
                  <td className="earth-compare">
                    0.82
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>1.4 * 10<sup>15</sup> km<sup>3</sup></td>
                  <td className="earth-compare">
                    0.86
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
 
export default Venus;