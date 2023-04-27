import { useState, useEffect } from "react"
import useFetch from "../functions/useFetch"

const Moon = () => {

  const [phase, setPhase] = useState(0)
  const [phaseText, setPhaseText] = useState('Waxing Crescent')
  const [growing] = useState(['waxing crescent', 'first quarter', 'waxing gibbous'])
  const [moonClass, setMoonClass] = useState('moon-container-growing')
  const { data, isPending, error } = useFetch('http://localhost:8080/api/v1/moon')

  function handleCLick () {
    setPhase(9)
    setPhaseText('Waning crescent')
    setMoonClass('moon-container-decreasing')
  }

  useEffect(() => {
    if (data) {
      setPhase(data.illumination)
      setPhaseText(data.current_phase)
      if (['Waxing Crescent', 'First Quarter', 'Waxing Gibbous'].includes(data.current_phase)) {
        setMoonClass('moon-container-growing')
      } else {
        setMoonClass('moon-container-decreasing')
      }
    }
  }, [data])

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
      <button onClick={handleCLick}>Change moon</button>
    </div>  
   );
}
 
export default Moon;
