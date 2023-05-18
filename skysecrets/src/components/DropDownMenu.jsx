import menu from '../img/menu-white.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

const DropDownMenu = () => {
const [shown, setShown] = useState('drop-down-menu hidden')
const history = useHistory();

const menuClick = () => {
  if (shown.split(' ').length > 1) {
    setShown('drop-down-menu')
  } else {
    setShown('drop-down-menu hidden')
  }
}

const clickLink = (event) => {
  history.push(`${event.target.id}`)
}

  return ( 
    <div className="menu-wrapper">
      <div className="menu-head">
        <img src={menu} alt="menu" onClick={menuClick}/>
      </div>
      <div className={shown} onClick={menuClick}>
        <div className="drop-down-item" id="/" onClick={clickLink}><Link to="/">Start</Link></div>
        <div className="drop-down-item" id="/map" onClick={clickLink}><Link to="/map">Location</Link></div>
        <div className="drop-down-item" id="/overview" onClick={clickLink}><Link to="/overview">Overview</Link></div>
        <div className="drop-down-item" id="/image" onClick={clickLink}><Link to="/image">Image</Link></div>
        <div className="drop-down-item" id="/aurora" onClick={clickLink}><Link to="/aurora">Aurora</Link></div>
        <div className="drop-down-item" id="/moon" onClick={clickLink}><Link to="/moon">Moon</Link></div>
        <div className="drop-down-item" id="/sun" onClick={clickLink}><Link to="/sun">Sun</Link></div>
        <div className="drop-down-item" id="/planets" onClick={clickLink}><Link to="/planets">Planets</Link></div>
        <div className="drop-down-item" id="/index" onClick={clickLink}><Link to="/index">K-index</Link></div>
      </div>
    </div>
   );
}
 
export default DropDownMenu;