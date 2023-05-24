/* eslint-disable no-unused-vars */
import { useState } from 'react'

/**
 * Register component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Register = (props) => {
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
      <h3>Registration</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" placeholder="***********" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" name="email" placeholder="your-email@mail.com" />
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name"placeholder="first name" />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name"placeholder="last name" />
        <input type="submit" value="Register" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}
export default Register
