import mars from './img/mars.png'
import earth from './img/earth.png'
import { useState } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { useContext } from "react"
import { LocationContext } from "../../context/LocationContext"

const Mars = () => {

  const [showInfo, setShowInfo] = useState(false)
  const {location} = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/planets/mars', { lat: location[0], lng: location[1] })

  const handleClick = (event) => {
    setShowInfo(!showInfo)
  }

  return ( 
    <div className="mars-container">
      <h3>Mars</h3>
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
      <div id="mars" className="planet">
        <img src={mars} alt="mars" />
        {!showInfo && (
          <button className="planet-button" onClick={handleClick}>Show info</button>
        )}
        {showInfo && (
          <div className="show-planet-info">
            <table className="planet-table">
              <tbody>
                <tr>
                  <td>Orbital period</td>
                  <td>780 d</td>
                  <td className="earth-compare">
                    1.88
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Surface gravity</td>
                  <td>3.72 m/s<sup>3</sup></td>
                  <td className="earth-compare">
                    0.36
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>6.4 * 10<sup>23</sup> kg</td>
                  <td className="earth-compare">
                    0.11
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>1.6 * 10<sup>11</sup> km<sup>3</sup></td>
                  <td className="earth-compare">
                    0.15
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
 
export default Mars;