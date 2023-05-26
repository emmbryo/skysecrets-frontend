/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

/**
 * Login component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      username,
      password
    }
    const url = 'http://localhost:8081/api/v1/login'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('somethin went wrong with the fetch')
      }

      const token = await response.json()
      console.log(token)
    } catch (error) {
      console.log(error)
    }
    setUsername('')
    setPassword('')
    history.push('/')
  }

  return (
    <div className="user-form-container">
      <h3>Log in</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="***********" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <input className="submit-button" type="submit" value="Login" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login
