import { Link } from "react-router-dom";

const Start = () => {
  return ( 
    <div className="start-container">
      <div className="text">
        <p>Welcome!</p>
        <p className="start-text">To get accurate information please set your location:</p>
      </div>
      <button className="start-button"><Link to="/map">Set location</Link></button>
      <div className="text">
        <p className="start-text">Or check the status for Stockholm, Sweden:</p>
      </div>
      <button className="start-button"><Link to="/overview">Overview</Link></button>
      <button className="start-button"><Link to="/aurora">Aurora</Link></button>
      <button className="start-button"><Link to="/moon">Moon</Link></button>
      <button className="start-button"><Link to="/sun">Sun</Link></button>
      <button className="start-button"><Link to="/planets">Planets</Link></button>
      <button className="start-button"><Link to="/image">Image of the day</Link></button>
    </div>
   );
}
 
export default Start;