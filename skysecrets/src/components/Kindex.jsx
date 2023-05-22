import info from '../img/information.png'
import { useRef, useState } from 'react'

/**
 * K index component.
 *
 * @returns {object} react component.
 */
const Kindex = () => {
  const infoElements = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const [showInfo, setShowInfo] = useState(false)

  /**
   * Toggles the class of the element.
   *
   * @param {number} index index to reference the useRef.
   */
  const handleClick = (index) => {
    if (infoElements[index].current) {
      const currentClassName = infoElements[index].current.className
      const newClassName = currentClassName.includes('hidden') ? '' : 'hidden'
      infoElements[index].current.className = newClassName
    }
  }

  /**
   * Toggles showInfo.
   */
  const handleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div className="kindex-container">
      <h3>Kp-index</h3>
      <p>The Kp Index is a globally averaged measure on the disturbances of earth's magnetic field. It is described by a scale of 0-9 with 1 being calm and 5 or more indication a geomagnetic storm. Simplified: The higher the number, the higher the chances for aurora.</p>
      {!showInfo && (
        <button onClick={handleInfo}>More info</button>
      )}
      {showInfo && (
        <div className="extra-info">
          <p>The Kp Index is derived from the observation of magnetic field variations at multiple magnetometer stations around the world. It is based on the maximum amplitude of disturbances recorded at each station during a specific time period, typically every 3 hours.</p>
          <p>Solar activity, particularly geomagnetic storms and coronal mass ejections (CMEs) from the Sun, can significantly impact the Kp Index. When a strong solar event occurs, such as a CME interacting with Earth's magnetosphere, it can cause geomagnetic disturbances and increase the Kp Index values.</p>
          <p>Higher Kp Index values, usually ranging from 0 to 9, indicate a higher level of geomagnetic activity. Values of 5 or above are generally associated with increased chances of aurora sightings at higher latitudes.</p>
          <p>Therefore, while the Kp Index is not a direct measure of solar activity, it serves as an indicator of the resulting geomagnetic disturbances caused by solar activity. It is commonly used by researchers, scientists, and enthusiasts to assess the potential for aurora sightings and monitor the level of geomagnetic activity.</p>
          <button onClick={handleInfo}>Hide info</button>
        </div>
      )}
      <table>
        <tbody>
          <tr id="kindex-green">
            <td>Green</td>
            <td>Calm or small geomagnetic disturbance</td>
            <td><b>Kp-Index 0-4</b></td>
            <td>
              <div>
                <p ref={infoElements[0]} className="hidden">No effect on devices or people</p>
                <img src={info} alt="info-4" onClick={() => handleClick(0)}/>
              </div>
            </td>
          </tr>
          <tr id="kindex-yellow">
            <td>Yellow</td>
            <td>Weak/minor geomagnetic storm</td>
            <td><b>Kp-Index 5/G1</b></td>
            <td>
              <div>
                <p ref={infoElements[1]} className="hidden">Weak fluctuations in the electrical grid, minor effects on the operation of space satellites, as well as on the migration of animals are quite possible.</p>
                <img src={info} alt="info-5" onClick={() => handleClick(1)}/>
              </div>
            </td>
          </tr>
          <tr id="kindex-dark-yellow">
            <td>Dark yellow</td>
            <td>Moderate geomagnetic storm</td>
            <td><b>Kp-Index 6/G2</b></td>
            <td>
              <div>
                <p ref={infoElements[2]} className="hidden">Power systems located at high latitudes can experience emergency situations. Prolonged geomagnetic storms can damage transformers. HF radio signas may weaken.</p>
                <img src={info} alt="info-6" onClick={() => handleClick(2)}/>
              </div>
            </td>
          </tr>
          <tr id="kindex-orange">
            <td>Orange</td>
            <td>Strong geomagnetic storm</td>
            <td><b>Kp-Index 7/G3</b></td>
            <td>
              <div>
                <p ref={infoElements[3]} className="hidden">False alarms may be triggered on some protective electronic devices. Correction of satellite orientation and navigation in outer space may be required.</p>
                <img src={info} alt="info-6" onClick={() => handleClick(3)}/>
              </div>
            </td>
          </tr>
          <tr id="kindex-red">
            <td>Red</td>
            <td>Severe geomagnetic storm</td>
            <td><b>Kp-Index 8/G4</b></td>
            <td>
              <div>
                <p ref={infoElements[4]} className="hidden">There may be widespread problems with power grid voltages. Satellite nagivation may worsen for serveral hours, anf LF radio navigation may be disrupted.</p>
                <img src={info} alt="info-6" onClick={() => handleClick(4)}/>
              </div>
            </td>
          </tr>
          <tr id="kindex-dark-red">
            <td>Dark red</td>
            <td>Extreme geomagnetic storm</td>
            <td><b>Kp-Index 9/G5</b></td>
            <td>
              <div>
                <p ref={infoElements[5]} className="hidden">Power systems may experience transformer damage and a complete collapse. HF radio comminications may not be possible. Satellite navigation may be disrupted.</p>
                <img src={info} alt="info-6" onClick={() => handleClick(5)}/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>&copy;</p>
    </div>
  )
}

export default Kindex
