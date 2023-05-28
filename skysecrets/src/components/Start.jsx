/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import Location from './Location'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

/**
 * Start component.
 *
 * @returns {object} react component.
 */
const Start = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="start-container">
      { user && (
        <div className="top-choice-start-container">
          <div className="text">
          <p className="start-text">To get accurate information please set a location of interest:</p>
        </div>
        <button className="start-button">
          <Link to="/map">
            <p>Set Location</p>
          </Link>
        </button>
      </div>
      )}
      { !user && (
        <div className="top-choice-start-container">
        <div className="text">
        <p className="start-text">To be able to set location and view your library, please log in:</p>
      </div>
      <button className="start-button">
        <Link to="/user">
          <p>Login</p>
        </Link>
      </button>
    </div>
      )}
      <div className="text">
        <p className="start-text">Or check the status for previously set location:</p>
        <Location />
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
        <Link to="/planets">
          <p>Planets</p>
        </Link>
      </button>
      <button className="start-button">
        <Link to="/image">
          <p>Image of the day</p>
        </Link>
      </button>
      { user && (
        <button className="start-button">
        <Link to="/library">
          <p>Your Library</p>
        </Link>
      </button>
      )}
    </div>
  )
}

export default Start
