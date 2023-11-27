/* eslint-disable no-unused-vars */
import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Sidebar from './Sidebar'
import { useState } from 'react'

/**
 * Planets component.
 *
 * @returns {object} react component.
 */
const Planets = () => {
  const [ifMercury, setIfMercury] = useState(false)
  const [ifVenus, setIfVenus] = useState(false)
  const [ifMars, setIfMars] = useState(false)
  const [ifJupiter, setIfJupiter] = useState(false)
  const [ifSaturn, setIfSaturn] = useState(false)
  const [ifOverview, setIfOverview] = useState(true)

  /**
   * Sets all planets view state to false.
   */
  const allToFalse = () => {
    setIfJupiter(false)
    setIfMars(false)
    setIfSaturn(false)
    setIfVenus(false)
    setIfMercury(false)
    setIfOverview(false)
  }

  /**
   * Sets true to viewing the chosen planet.
   *
   * @param {object} event the click event.
   */
  const handleClick = (event) => {
    console.log(event.target.id)
    allToFalse()
    switch (event.target.id) {
      case 'mercury':
        setIfMercury(true)
        break
      case 'venus':
        setIfVenus(true)
        break
      case 'mars':
        setIfMars(true)
        break
      case 'jupiter':
        setIfJupiter(true)
        break
      case 'saturn':
        setIfSaturn(true)
        break
      default:
        setIfOverview(true)
        break
    }
  }

  return (
    <div className="planets-outer-container">
      <div className="planet-overview-container">
      {ifOverview && (
        <div className="planet-start-view-container" onClick={handleClick}>
          <div className="sidebar-xl">
            <Sidebar />
          </div>
          <div className="planet-names" onClick={handleClick}>
            <p id="mercury" className="mercury">Mercury</p>
            <p id="venus" className="venus">Venus</p>
            <p id="mars" className="mars">Mars</p>
            <p id="jupiter" className="jupiter">Jupiter</p>
            <p id="saturn" className="saturn">Saturn</p>
          </div>
        </div>
      )}
    </div>
    {!ifOverview && (
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
    )}
    </div>
  )
}
export default Planets
