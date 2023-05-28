/* eslint-disable no-unused-vars */
import saturn from './Planets/img/saturn.png'
import { useHistory } from 'react-router-dom'

/**
 * Welcome component.
 *
 * @returns {object} react component.
 */
const Welcome = () => {
  const history = useHistory()
  return (
    <div className="welcome-container">
      <div className="welcome-info">
        <h3>Welcome!</h3>
        <img className="welcome-image" src={saturn} alt="saturn" />
        <p>This is SkySecrets, an app to help you keep track on what is happening on the night sky. Let's get started!</p>
      </div>
      <div className="welcome-login">
        <h3>Already an user?</h3>
        <button className="welcome-button" onClick={() => history.push('/user')}>Login</button>
      </div>
      <div className="welcome-register">
        <h3>New with SkySecrets?</h3>
        <button className="welcome-button" onClick={() => history.push('/user')}>Create account</button>
        <button className="welcome-button" onClick={() => history.push('/start')}>Or take a look as a guest</button>
      </div>
    </div>
  )
}
export default Welcome
