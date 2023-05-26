import sun from './img/sun.png'
import moon from './img/moon.png'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import useFetchPost from '../../functions/useFetchPost'

/**
 * SunAndMoon component.
 *
 * @returns {object} react component.
 */
const SunAndMoon = () => {
  const { location } = useContext(UserContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/moon/times', { lat: location[0], lng: location[1] })

  return (
    <div className="sun-and-moon">
      <div className="sun-overview">
        <div className="sun-times">
          {postIsPending && (
            <div>Loading...</div>
          )}
          {postError && (
            <div>An error occurred: {postError}</div>
          )}
          {!postIsPending && postData && (
            <div>
              <p>&uarr; {postData.sunrise}</p>
              <p>&darr; {postData.sunset}</p>
            </div>
          )}
        </div>
        <img className="sun-moon-icon" src={sun} alt="sun" />
      </div>
      <div className="moon-overview">
        <img className="sun-moon-icon" src={moon} alt="moon" />
        <div className="mooon-times">
        {!postIsPending && postData && (
            <div>
              <p>{postData.moonrise} &uarr;</p>
              <p>{postData.moonset} &darr;</p>
            </div>
        )}
        </div>
      </div>
    </div>
  )
}
export default SunAndMoon
