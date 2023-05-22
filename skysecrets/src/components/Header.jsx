/* eslint-disable no-unused-vars */
import DropDownMenu from './DropDownMenu'
import Location from './Location'

/**
 * Header component.
 *
 * @returns {object} react component.
 */
const Header = () => {
  return (
    <div className="header-container">
      <div className="title-row">
        <Location />
        <h1>SkySecrets</h1>
        <DropDownMenu className="menu-icon"/>
      </div>
    </div>
  )
}

export default Header
