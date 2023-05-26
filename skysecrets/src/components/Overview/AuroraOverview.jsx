import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

/**
 * AuroraOverview Component.
 *
 * @returns {object} react component.
 */
const AuroraOverview = () => {
  const { location } = useContext(UserContext)

  return (
    <div className="aurora-overview">
      <div>
        <p>Aurora oval:</p>
      </div>
      {location[0] >= 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" alt="aurora" />)}
      {location[0] < 0 && (<img src="https://services.swpc.noaa.gov/images/aurora-forecast-southern-hemisphere.jpg" alt="aurora" />)}
    </div>
  )
}

export default AuroraOverview
