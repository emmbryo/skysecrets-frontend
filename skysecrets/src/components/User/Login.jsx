/* eslint-disable no-unused-vars */
import { useState } from 'react'

/**
 * Login component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
  }

  return (
    <div className="user-form-container">
      <h2>Welcome to SkySecrets!</h2>
      <p>Please log in</p>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" placeholder="***********" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <input type="submit" value="Login" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login
