// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import mercury from './img/mercury.png'
import venus from './img/venus.png'
import mars from './img/mars.png'
import jupiter from './img/jupiter.png'
import saturn from './img/saturn.png'

/**
 * Sidebar component.
 *
 * @returns {object} react component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="../planets/"><img src={ mercury } alt="mercury" id="mercury"/></Link>
      <Link to="../planets/"><img src={ venus } alt="venus" id="venus"/></Link>
      <Link to="../planets/"><img src={ mars } alt="mars" id="mars"/></Link>
      <Link to="../planets/"><img src={ jupiter } alt="jupiter" id="jupiter"/></Link>
      <Link to="../planets/"><img id="saturn" src={ saturn } alt="saturn"/></Link>
    </div>
  )
}
export default Sidebar
