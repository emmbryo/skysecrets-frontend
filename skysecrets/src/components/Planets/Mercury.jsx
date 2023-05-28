import mercury from './img/mercury.png'
import earth from './img/earth.png'
import { useState, useContext } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { UserContext } from '../../context/UserContext'

/**
 * Mercury component.
 *
 * @returns {object} react component.
 */
const Mercury = () => {
  const [showInfo, setShowInfo] = useState(false)
  const { location } = useContext(UserContext)
  const { postData, postIsPending, postError } = useFetchPost(`${process.env.REACT_APP_API_BASE_URL}/planets/mercury`, { lat: location[0], lng: location[1] })

  /**
   * Toggles showInfo.
   */
  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="mercury-container">
      <div className="planet-name">
        <p className="mercury">Mercury</p>
      </div>
      {postIsPending && (
        <div className="horizon-info"><p>Loading...</p></div>
      )}
      {postError && (
        <div className="horizon-info">an error occurred: {postError}</div>
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
          <button className="planet-button" onClick={handleClick}>Show info</button>)}
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
  )
}
export default Mercury
