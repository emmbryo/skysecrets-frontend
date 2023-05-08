import { useState, useEffect } from "react"
import useFetch from "../functions/useFetch"
import useFetchPost from "../functions/useFetchPost";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

const Moon = () => {

  const [phase, setPhase] = useState(0)
  const [phaseText, setPhaseText] = useState('Waxing Crescent')
  const [moonClass, setMoonClass] = useState('moon-container-growing')
  const { data, isPending, error } = useFetch('http://localhost:8080/api/v1/moon')
  const { location } = useContext(LocationContext)
  const { postData, postIsPending, postError } = useFetchPost('http://localhost:8080/api/v1/moon/times', { lat: location[0], lng: location[1] })
  console.log('I moon: ', postData, postIsPending, postError)

  useEffect(() => {
    if (data) {
      setPhase(data.illumination)
      setPhaseText(data.current_phase)
      if (['Waxing Crescent', '1st Quarter', 'Waxing Gibbous'].includes(data.current_phase)) {
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
      {error && <div className="error-message">{ error }</div>}
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
      </div> )}
      <p>Moon Phase: { phaseText }</p>
      <p>Illumination: { phase }%</p>
      {postIsPending && (<p>Loading...</p>)}
      {!postIsPending && (
        <div>
          <p>Moonrise: {postData.moonrise}</p>
          <p>Moonset: {postData.moonset}</p>
        </div>)}
      {/* <p>latitude: { location[0].toFixed(4) }</p>
      <p>longitude: { location[1].toFixed(4) }</p> */}
    </div>  
   );
}
 
export default Moon;