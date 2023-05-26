/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'

/**
 * Register component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Register = (props) => {
  const [username, setUsername] = useState('')
  const usernameRef = useRef()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    setShowError(true)
  }, [error])

  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      username,
      password,
      email,
      firstName,
      lastName
    }
    const url = 'http://localhost:8081/api/v1/register'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (response.status === 400) {
      setError('Registration failed. Make sure the email was in correct format')
    } else if (response.status === 409) {
      setError('Username/email already taken, please try another one.')
    } else if (!response.ok) {
      throw new Error('Something went wrong with the fetch')
    }

    setUsername('')
    setPassword('')
    setEmail('')
    setFirstName('')
    setLastName('')
    props.onFormSwitch('login')
  }

  return (
    <div className="user-form-container">
      { showError && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">
          Username
        </label>
        <input
          ref={usernameRef}
          required
          autoComplete="off"
          maxLength="200"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">
          Password (min 10 chars)
        </label>
        <input
          required
          autoComplete="off"
          minLength="10"
          maxLength="200"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          value={password}
          onChange={(event) => setPassword(event.target.value)}/>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          required
          autoComplete="off"
          maxLength="200"
          id="email"
          name="email"
          placeholder="your-email@mail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="first-name">
          First Name
        </label>
        <input
          type="text"
          autoComplete="off"
          id="first-name"
          maxLength="200"
          name="first-name"
          placeholder="first name"
          value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <label htmlFor="last-name">
          Last Name
        </label>
        <input
          type="text"
          autoComplete="off"
          maxLength="200"
          id="last-name"
          name="last-name"
          placeholder="last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}/>
        <input
          className="submit-button"
          type="submit"
          value="Register" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}
export default Register
