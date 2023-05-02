import mercury from '../img/planet-icons/mercury.png'
import venus from '../img/planet-icons/venus-2.png'
import mars from '../img/planet-icons/mars.png'
import jupiter from '../img/planet-icons/jupiter.png'
import saturn from '../img/planet-icons/saturn.png'

const Planets = () => {
  return ( 
    <div className="planets-container">
      <img src={ mercury } alt="mercury"/>
      <img src={ venus } alt="venus"/>
      <img src={ mars } alt="mars"/>
      <img src={ jupiter } alt="jupiter"/>
      <img src={ saturn } alt="saturn"/>
    </div>
   );
}
 
export default Planets;