import mercury from '../../img/planets/mercury.png'
import venus from '../../img/planets/venus.png'
import mars from '../../img/planets/mars.png'
import jupiter from '../../img/planets/jupiter.png'
import saturn from '../../img/planets/saturn.png'

const Sidebar = () => {
  return ( 
    <div className="sidebar-container">
      <img src={ mercury } alt="mercury"/>
      <img src={ venus } alt="venus"/>
      <img src={ mars } alt="mars"/>
      <img src={ jupiter } alt="jupiter"/>
      <img src={ saturn } alt="saturn"/>
    </div>
   );
}
 
export default Sidebar;