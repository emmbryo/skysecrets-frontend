import { useContext, useState, useEffect } from 'react'
import { LocationContext } from '../context/LocationContext'
import globe from '../img/earth-coord.png'

/**
 * Location component.
 *
 * @returns {object} react component.
 */
const Location = () => {
  const { location } = useContext(LocationContext)
  const [orientation, setOrientation] = useState(['N', 'W'])

  useEffect(() => {
    if (location[0] <= 0 && location[1] <= 0) {
      setOrientation(['S', 'W'])
    } else if (location[0] > 0 && location[1] > 0) {
      setOrientation(['N', 'E'])
    } else if (location[0] > 0 && location[1] <= 0) {
      setOrientation(['N', 'W'])
    } else if (location[0] <= 0 && location[1] > 0) {
      setOrientation(['S', 'E'])
    }
  // eslint-disable-next-line
  // react-hooks/exhaustive-deps
  }, location)

  return (
    <div className="location-container">
      <img src={globe} alt="marker" />
      <div className="coordinates">
        {location && (
          <div className="coordinates">
            <p>{Math.abs(location[0].toFixed(2))}&deg;{orientation[0]}</p>
            <p>{Math.abs(location[1].toFixed(2))}&deg;{orientation[1]}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Location
