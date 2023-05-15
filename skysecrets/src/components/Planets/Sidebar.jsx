import { Link } from 'react-router-dom'
import mercury from './img/mercury.png'
import venus from './img/venus.png'
import mars from './img/mars.png'
import jupiter from './img/jupiter.png'
import saturn from './img/saturn.png'

const Sidebar = () => {
  return ( 
    <div className="sidebar-container">
      <Link to="../planets/mercury"><img src={ mercury } alt="mercury"/></Link>
      <Link to="../planets/venus"><img src={ venus } alt="venus"/></Link>
      <Link to="../planets/mars"><img src={ mars } alt="mars"/></Link>
      <Link to="../planets/jupiter"><img src={ jupiter } alt="jupiter"/></Link>
      <Link to="../planets/saturn"><img src={ saturn } alt="saturn"/></Link>  
    </div>
   );
}
 
export default Sidebar;