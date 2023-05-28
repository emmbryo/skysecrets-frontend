/* eslint-disable no-unused-vars */
import saturn from './Planets/img/saturn.png'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

/**
 * Welcome component.
 *
 * @returns {object} react component.
 */
const Welcome = () => {
  const history = useHistory()
  const { user } = useContext(UserContext)
  return (
    <div className="welcome-container">
      <div className="welcome-info">
        { user && (<h3>Welcome back!</h3>)}
        { !user && (<h3>Welcome!</h3>)}
        <img className="welcome-image" src={saturn} alt="saturn" />
        <p>This is SkySecrets, an app to help you keep track on what is happening on the night sky. Let's get started!</p>
      </div>
      { !user && (
        <div className="welcome-login">
          <h3>Already an user?</h3>
          <button className="welcome-button" onClick={() => history.push('/user')}>Login</button>
        </div>
      )}
      { !user && (
        <div className="welcome-register">
          <h3>New with SkySecrets?</h3>
          <button className="welcome-button" onClick={() => history.push('/user')}>Create account</button>
          <button className="welcome-button" onClick={() => history.push('/start')}>Or take a look as a guest</button>
        </div>
      )}
      { user && (
        <div className="welcome-logged-in">
          <h3>You're ready to go</h3>
          <button className="welcome-button" onClick={() => history.push('/start')}>Explore the skies!</button>
        </div>
      )}
    </div>
  )
}
export default Welcome
