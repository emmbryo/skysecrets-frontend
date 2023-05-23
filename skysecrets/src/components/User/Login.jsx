/* eslint-disable no-unused-vars */
import { useState } from 'react'

/**
 * Login component.
 *
 * @returns {object} react component
 */
const Login = () => {
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
    <div className="login-container">
      <h2>Welcome to SkySecrets!</h2>
      <p>Please log in</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <input type="submit" value="Login" />
      </form>
      <button>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login
