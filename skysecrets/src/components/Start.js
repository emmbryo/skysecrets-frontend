import { Link } from "react-router-dom";

const Start = () => {
  return ( 
    <div className="start-container">
      <p>Welcome!</p>
      <button className="start-button"><Link to="/map">Set location</Link></button>
      <button className="start-button"><Link to="/moon">No location</Link></button>
    </div>
   );
}
 
export default Start;