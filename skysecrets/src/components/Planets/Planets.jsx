import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'

const Planets = () => {
  return ( 
    <div className="planets-container">
      <p>Planets!</p>
      <Mercury />
      <Venus />
      <Mars />
      <Jupiter />
      <Saturn />
    </div>
   );
}
 
export default Planets;