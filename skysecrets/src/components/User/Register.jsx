/* eslint-disable no-unused-vars */
import { useState } from 'react'

/**
 * Register component.
 *
 * @returns {object} react component
 */
const Register = () => {
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
    <div className="register-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}
export default Register
