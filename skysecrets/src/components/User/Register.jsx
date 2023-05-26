/* eslint-disable no-unused-vars */
import { useState } from 'react'
import useFetchPost from '../../functions/useFetchPost'

/**
 * Register component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Register = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      username,
      password,
      email,
      firstName,
      lastName
    }
    const url = 'http://localhost:8081/api/v1/register'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(response => {
      if (!response.ok) {
        throw Error('Something went wrong with the fetch.')
      }
      return response.json()
    }).then(data => {
      console.log('fetch klart: ', data)
    })
    setUsername('')
    setPassword('')
    setEmail('')
    setFirstName('')
    setLastName('')
    props.onFormSwitch('login')
  }

  return (
    <div className="user-form-container">
      <h3>Registration</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="***********" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" name="email" placeholder="your-email@mail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name"placeholder="first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name"placeholder="last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        <input className="submit-button" type="submit" value="Register" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}
export default Register
