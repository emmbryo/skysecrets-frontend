import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <div>
      <div className='nav'>
        <Link to="/">Start</Link>
        <Link to="/moon">Moon</Link>
        <Link to="/aurora">Aurora</Link>
        <Link to="/map">Map</Link>
      </div>
      <h1>SkySecrets</h1>
    </div>
   );
}
 
export default Header;