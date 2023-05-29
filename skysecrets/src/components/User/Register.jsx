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
    if (error === '') {
      setShowError(false)
    } else {
      setShowError(true)
    }
  }, [error])

  useEffect(() => {
    console.log('showError ändrats', showError)
  }, [showError])

  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const payload = {
        username,
        password,
        email,
        firstName,
        lastName
      }
      const url = `${process.env.REACT_APP_AUTH_API_BASE_URL}/register`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (response.status === 400) {
        setError('Registration failed. Make sure the email was in correct format')
        console.log('Registration failed. Make sure the email was in correct format')
      } else if (response.status === 409) {
        setError('Username/email already taken, please try another one.')
      } else if (!response.ok) {
        throw new Error('Server not responding')
      } else {
        setUsername('')
        setPassword('')
        setEmail('')
        setFirstName('')
        setLastName('')
        props.onFormSwitch('login')
      }
    } catch (error) {
      setError('Server not responding')
    }
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
          onFocus={() => setShowError(false)}
          onChange={(event) => {
            setUsername(event.target.value)
            setError('')
          }}/>
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
          onFocus={() => setShowError(false)}
          onChange={(event) => {
            setPassword(event.target.value)
            setError('')
          }}/>
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
          onFocus={() => setShowError(false)}
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}/>
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
          value={firstName}
          onFocus={() => setShowError(false)}
          onChange={(event) => {
            setFirstName(event.target.value)
            setError('')
          }}/>
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
          onFocus={() => setShowError(false)}
          onChange={(event) => {
            setLastName(event.target.value)
            setError('')
          }}/>
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
