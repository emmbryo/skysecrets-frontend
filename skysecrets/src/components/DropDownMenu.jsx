import menu from '../img/menu.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DropDownMenu = () => {
const [shown, setShown] = useState('drop-down-menu hidden')

const menuClick = () => {
  if (shown.split(' ').length > 1) {
    setShown('drop-down-menu')
  } else {
    setShown('drop-down-menu hidden')
  }
}

  return ( 
    <div className="menu-wrapper">
      <div className="menu-head">
        <img src={menu} alt="menu" onClick={menuClick}/>
      </div>
      <div className={shown} onClick={menuClick}>
        <div className="drop-down-item"><Link to="/map">Location</Link></div>
        <div className="drop-down-item"><Link to="/overview">Overview</Link></div>
        <div className="drop-down-item"><Link to="/image">Image</Link></div>
        <div className="drop-down-item"><Link to="/aurora">Aurora</Link></div>
        <div className="drop-down-item"><Link to="/moon">Moon</Link></div>
        <div className="drop-down-item"><Link to="/sun">Sun</Link></div>
        <div className="drop-down-item"><Link to="/planets">Planets</Link></div>
        <div className="drop-down-item"><Link to="/index">K-index</Link></div>
      </div>
    </div>
   );
}
 
export default DropDownMenu;