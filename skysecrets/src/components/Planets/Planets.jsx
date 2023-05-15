import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Planets = () => {
  const [ifMercury, setIfMercury] = useState(false)
  const [ifVenus, setIfVenus] = useState(false)
  const [ifMars, setIfMars] = useState(false)
  const [ifJupiter, setIfJupiter] = useState(true)
  const [ifSaturn, setIfSaturn] = useState(false)

  const allToFalse = () => {
    setIfJupiter(false)
    setIfMars(false)
    setIfSaturn(false)
    setIfVenus(false)
    setIfMercury(false)
  }

  const handleClick = (event) => {
    console.log(event.target.alt)
    allToFalse()
    switch (event.target.alt) {
      case "mercury":
        setIfMercury(true)
        break
      case "venus":
        setIfVenus(true)
        break
        case "mars":
          setIfMars(true)
          break
      case "jupiter":
        setIfJupiter(true)
        break
      case "saturn":
        setIfSaturn(true)
        break
      default:
        break
    }
  }

  return ( 
    <div className="planets-container">
      <div className="planet-side-bar" onClick={handleClick}>
        <Sidebar />
      </div>
      <div className="planet-info">
        {ifMercury && (<Mercury/>)}
        {ifVenus && (<Venus />)}
        {ifMars && (<Mars />)}
        {ifJupiter && (<Jupiter />)}
        {ifSaturn && (<Saturn />)}
      </div>    
    </div>
   );
}
 
export default Planets;