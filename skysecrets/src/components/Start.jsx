import { Link } from "react-router-dom";

const Start = () => {
  return ( 
    <div className="start-container">
      <div className="text">
        <p>Welcome!</p>
        <p className="start-text">To get accurate information please set your location:</p>
      </div>
      <button className="start-button">
        <Link to="/map">
          <p>Set Location</p>
        </Link>
      </button>
      <div className="text">
        <p className="start-text">Or check the status for Stockholm, Sweden:</p>
      </div>
      <button className="start-button">
        <Link to="/overview">
          <p>Overview</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/aurora">
          <p>Aurora</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/moon">
          <p>Moon</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/sun">
          <p>Sun</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/planets">
          <p>Planets</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/image">
          <p>Image of the day</p>
        </Link>
      </button>
    </div>
   );
}
 
export default Start;