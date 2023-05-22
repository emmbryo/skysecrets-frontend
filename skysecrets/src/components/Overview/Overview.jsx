/* eslint-disable no-unused-vars */
import PlanetsOverview from './PlanetsOverview'
import AuroraOverview from './AuroraOverview'
import SunAndMoon from './SunAndMoon'

/**
 * Overview component.
 *
 * @returns {object} react component.
 */
const Overview = () => {
  return (
    <div className="overview-container" data-testid="overview">
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
  )
}
export default Overview
