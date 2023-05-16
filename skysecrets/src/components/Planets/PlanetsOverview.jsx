import mercury from './img/mercury.png'
import venus from './img/venus.png'
import mars from './img/mars.png'
import jupiter from './img/jupiter.png'
import saturn from './img/saturn.png'

const PlanetsOverview = () => {
  return ( 
    <div className="planets-overview-container">
      <p>Over horizon:</p>
      <div className="planets-overview-images">
        <div className="round-planets">
          <img className="under-horizon" src={ mercury } alt="mercury"/>
          <img className="under-horizon" src={ venus } alt="venus"/>
          <img className="under-horizon" src={ mars } alt="mars"/>
          <img className="under-horizon" src={ jupiter } alt="jupiter"/>
        </div>

        <img className="under-horizon" id="saturn" src={ saturn } alt="saturn"/>  
    </div>
    </div>
    
   );
}
 
export default PlanetsOverview;