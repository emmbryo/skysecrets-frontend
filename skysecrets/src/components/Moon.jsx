/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import useFetch from '../functions/useFetch'
import useFetchPost from '../functions/useFetchPost'
import { UserContext } from '../context/UserContext'

/**
 * Moon component.
 *
 * @returns {object} react component.
 */
const Moon = () => {
  const [phase, setPhase] = useState()
  const [phaseText, setPhaseText] = useState('')
  const [moonClass, setMoonClass] = useState('')
  const { data, isPending, error } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/moon`)
  const { location } = useContext(UserContext)
  const { postData, postIsPending, postError } = useFetchPost(`${process.env.REACT_APP_API_BASE_URL}/moon/times`, { lat: location[0], lng: location[1] })

  useEffect(() => {
    if (data) {
      setPhase(data.illumination)
      setPhaseText(data.current_phase)
      if (process.env.REACT_APP_MOON_PHASES_GROWING.includes(data.current_phase)) {
        setMoonClass('moon-container-growing')
      } else {
        setMoonClass('moon-container-decreasing')
      }
    }
  }, [data])

  // The illumination of the moon image
  let widthLeft, widthRight
  if (phase < 51) {
    widthLeft = 0
    widthRight = 100 - 2 * phase
  } else {
    widthRight = 0
    widthLeft = (2 * phase) - 100
  }

  return (
    <div id="the-moon">
      { error && <div className="error-message"><p>{ error }</p></div>}
      { isPending && (<p>Loading...</p>)}
      { !isPending && (<div className={ moonClass }>
        <div id="circle-wrap" >
          <div id="moon">
          </div>
          <div id="cover"
            style={{
              left: `${phase}px`,
              width: `${widthRight}px`
            }}>
          </div>
          <div id="cover-right"
            style={{
              right: `${100 - phase}px`,
              width: `${widthLeft}px`
            }}>
          </div>
        </div>
      </div>)}
      <p>Phase: { phaseText }</p>
      <p>Illumination: { phase }%</p>
      {postIsPending && (<p>Loading...</p>)}
      { postError && <div className="error-message"><p>{ postError }</p></div>}
      {!postIsPending && postData && (
        <div>
          <div>
            <p>&uarr; {postData.moonrise}&nbsp;&nbsp;&nbsp;{postData.moonset} &darr;</p>
          </div>
        </div>)}
    </div>
  )
}
export default Moon
