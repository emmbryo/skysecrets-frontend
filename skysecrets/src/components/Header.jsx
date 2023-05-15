import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <div>
      <div className='nav'>
        <Link to="/">Start</Link>
        <Link to="/image">Image</Link>
        <Link to="/moon">Moon</Link>
        <Link to="/aurora">Aurora</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/sun">Sun</Link>
        <Link to="/index">Index</Link>
      </div>
      <h1>SkySecrets</h1>
    </div>
   );
}
 
export default Header;