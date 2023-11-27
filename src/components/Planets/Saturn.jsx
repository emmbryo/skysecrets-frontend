import saturn from './img/saturn.png'
import earth from './img/earth.png'
import { useState, useContext } from 'react'
import useFetchPost from '../../functions/useFetchPost'
import { UserContext } from '../../context/UserContext'

/**
 * Saturn component.
 *
 * @returns {object} react component.
 */
const Saturn = () => {
  const [showInfo, setShowInfo] = useState(false)
  const { location } = useContext(UserContext)
  const { postData, postIsPending, postError } = useFetchPost(`${process.env.REACT_APP_API_BASE_URL}/planets/saturn`, { lat: location[0], lng: location[1] })

  /**
   * Toggles showInfo.
   */
  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="saturn-container">
      <div className="planet-name">
        <p className="saturn">Saturn</p>
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
      <div className="planet" id="saturn">
        <img src={saturn} alt="saturn" id="saturn" />
        {!showInfo && (
          <button className="planet-button" onClick={handleClick}>Show info</button>
        )}
        {showInfo && (
          <div className="show-planet-info">
            <table className="planet-table">
              <tbody>
                <tr>
                  <td>Orbital period</td>
                  <td>29.5 yr</td>
                  <td className="earth-compare">
                    29.5
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Surface gravity</td>
                  <td>10.4 m/s<sup>3</sup></td>
                  <td className="earth-compare">
                    1.07
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>5.7 * 10<sup>26</sup> kg</td>
                  <td className="earth-compare">
                    95.2
                    <img src={earth} alt="earth" />
                  </td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>8.3 * 10<sup>14</sup> km<sup>3</sup></td>
                  <td className="earth-compare">
                    764
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
export default Saturn
