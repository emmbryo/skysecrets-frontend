import PlanetsOverview from "./PlanetsOverview"
import AuroraOverview from "./AuroraOverview"
import SunAndMoon from "./SunAndMoon"
import Location from "../Location"

const Overview = () => {
  return ( 
    <div className="overview-container" data-testid="overview">
      <p></p>
      <div className="location">
        <Location />
      </div>
      <div className="sun-and-moon">
        <SunAndMoon />
      </div>
      <div className="planets-overview">
        <PlanetsOverview />
      </div>
      <div className="aurora-overview">
        <AuroraOverview />
      </div>
    </div>
   );
}
 
export default Overview;