import jupiter from './img/jupiter.png'
import earth from './img/earth.png'
import { useState, useContext } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { UserContext } from '../../context/UserContext'

/**
 * Jupiter component.
 *
 * @returns {object} react component.
 */
const Jupiter = () => {
  const [showInfo, setShowInfo] = useState(false)
  const { location } = useContext(UserContext)
  const { postData, postIsPending, postError } = useFetchPost(`${process.env.REACT_APP_API_BASE_URL}/planets/jupiter`, { lat: location[0], lng: location[1] })

  /**
   * Toggles showInfo.
   *
   */
  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="jupiter-container">
      <div className="planet-name">
        <p className="jupiter">Jupiter</p>
      </div>
      {postIsPending && (
        <div className="horizon-info"><p>Loading...</p></div>
      )}
      {postError && (
        <div className="horizon-info error-message">an error occurred: {postError}</div>
      )}
      {!postIsPending && postData.planetOverHorizon && (
        <div className="horizon-info">
          <p>Over horizon!</p>
        </div>
      )}
      {!postIsPending && !postData.planetOverHorizon && !postError && (
        <div className="horizon-info">
          <p>Not over horizon</p>
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
                  <td>Orbital period</td>
                  <td>11.8 yr</td>
                  <td className="earth-compare">
                    11.8
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Surface gravity</td>
                  <td>24.8 m/s<sup>3</sup></td>
                  <td className="earth-compare">
                    2.53
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>1.9 * 10<sup>27</sup> kg</td>
                  <td className="earth-compare">
                    318
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>1.4 * 10<sup>15</sup> km<sup>3</sup></td>
                  <td className="earth-compare">
                    1321
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

export default Jupiter
