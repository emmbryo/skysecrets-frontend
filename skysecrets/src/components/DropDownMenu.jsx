import menu from '../img/menu-white.png'
import { useHistory } from 'react-router-dom'
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
        <div className="drop-down-item" id="/" onClick={clickLink}>Start</div>
        <div className="drop-down-item" id="/map" onClick={clickLink}>Location</div>
        <div className="drop-down-item" id="/overview" onClick={clickLink}>Overview</div>
        <div className="drop-down-item" id="/image" onClick={clickLink}>Image</div>
        <div className="drop-down-item" id="/aurora" onClick={clickLink}>Aurora</div>
        <div className="drop-down-item" id="/moon" onClick={clickLink}>Moon</div>
        <div className="drop-down-item" id="/sun" onClick={clickLink}>Sun</div>
        <div className="drop-down-item" id="/planets" onClick={clickLink}>Planets</div>
        <div className="drop-down-item" id="/index" onClick={clickLink}>K-index</div>
      </div>
    </div>
   );
}
 
export default DropDownMenu;