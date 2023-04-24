import { useState, useEffect } from "react"
import useFetch from "../functions/useFetch"

const Moon = () => {

  const [phase, setPhase] = useState(0)
  const [phaseText, setPhaseText] = useState('Waxing Crescent')
  const [error, setError] = useState(null)
  const { data } = useFetch('http://localhost:8000/moon')
  console.log(data)

  function handleCLick () {
    setPhase(100)
    setPhaseText('Full Moon')
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/moon')
      .then(res => {
        if(!res.ok) {
          throw Error('Something went wrong with the fetch.')
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        setPhase(data.illumination)
        setPhaseText(data.current_phase)
        setError(null)
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
  }, [])

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
      <div className="moon-container">
      <div id="circle-wrap" > 
        <div id="moon">  
        </div>
        <div id="cover" 
          style={{ 
            left: phase, 
            width: widthRight
          }}>  
        </div>
        <div id="cover-right" 
          style={{ 
            right: 100 - phase, 
            width: widthLeft
          }}>  
        </div>
      </div>
    </div>
      <p>Moon Phase: { phaseText }</p>
      <p>Illumination: { phase }%</p>
      <button onClick={handleCLick}>Full Moon</button>
    </div>  
   );
}
 
export default Moon;
