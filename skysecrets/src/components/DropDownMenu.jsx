import menu from '../img/menu-white.png'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

/**
 * DropDownMenu component.
 *
 * @returns {object} react component.
 */
const DropDownMenu = () => {
  const [shown, setShown] = useState('drop-down-menu hidden')
  const history = useHistory()

  /**
   * Toggles the menu.
   */
  const menuClick = () => {
    if (shown.split(' ').length > 1) {
      setShown('drop-down-menu')
    } else {
      setShown('drop-down-menu hidden')
    }
  }

  /**
   * Links to clicked link.
   *
   * @param {object} event the triggering event.
   */
  const clickLink = (event) => {
    history.push(`${event.target.id}`)
  }

  return (
    <div className="menu-wrapper">
      <div className="menu-head">
        <img src={menu} alt="menu" onClick={menuClick}/>
      </div>
      <div className={shown} onClick={menuClick}>
        <div className="drop-down-item" id="/" onClick={clickLink}>Start</div>
        <div className="drop-down-item" id="/user" onClick={clickLink}>User</div>
        <div className="drop-down-item" id="/map" onClick={clickLink}>Location</div>
        <div className="drop-down-item" id="/overview" onClick={clickLink}>Overview</div>
        <div className="drop-down-item" id="/image" onClick={clickLink}>Image of the day</div>
        <div className="drop-down-item" id="/aurora" onClick={clickLink}>Aurora</div>
        <div className="drop-down-item" id="/moon" onClick={clickLink}>Moon</div>
        <div className="drop-down-item" id="/planets" onClick={clickLink}>Planets</div>
        <div className="drop-down-item" id="/index" onClick={clickLink}>K-index</div>
      </div>
    </div>
  )
}

export default DropDownMenu
