/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
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
  const [errorMsg, setErrorMsg] = useState('')
  const usernameRef = useRef()
  const history = useHistory()

  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const login = await loginUser()
      const hasAccount = await userAccountStatus()
      if (!hasAccount.account) {
        const newAccount = await createUserAccount()
      }
    } catch (error) {
      console.log(error)
      setErrorMsg(error?.message)
    }

    setUsername('')
    setPassword('')
    history.push('/')
  }

  /**
   * Logs in the user.
   *
   * @returns {object} jwt token
   */
  const loginUser = async () => {
    const payload = {
      username,
      password
    }
    const url = 'http://localhost:8081/api/v1/login'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    })

    if (response.status === 401) {
      setErrorMsg('Invalid username or password, please try again')
    } else if (!response.ok) {
      throw new Error('something went wrong with the fetch')
    }

    const token = await response.json()
    console.log(token)
    return token
  }

  /**
   * Gets the user's account status.
   *
   * @returns {object} account status.
   */
  const userAccountStatus = async () => {
    const accountUrl = 'http://localhost:8080/api/v1/account'
    const accountResponse = await fetch(accountUrl, {
      credentials: 'include'
    })
    if (accountResponse.status === 403) {
      setErrorMsg('login not valid, please try again.')
    } else if (!accountResponse.ok) {
      throw new Error('Something went wrong with the fetch')
    }
    const account = await accountResponse.json()
    console.log(account)
    return account
  }

  /**
   * Creates an account for the user..
   *
   * @returns {object} account info.
   */
  const createUserAccount = async () => {
    const accountUrl = 'http://localhost:8080/api/v1/account'
    const accountResponse = await fetch(accountUrl, {
      method: 'POST',
      credentials: 'include'
    })
    if (accountResponse.status === 403) {
      setErrorMsg('login not valid, please try again.')
    } else if (!accountResponse.ok) {
      throw new Error('Something went wrong with the fetch')
    }
    const account = await accountResponse.json()
    console.log(account)
    return account
  }

  return (
    <div className="user-form-container">
      <h3>Log in</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="username">
          Username
        </label>
        <input
          required
          autoComplete="off"
          maxLength="200"
          ref={usernameRef}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="password">
          Password
        </label>
        <input
          required
          autoComplete="off"
          maxLength="200"
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          value={password}
          onChange={(event) => setPassword(event.target.value)}/>
        <input className="submit-button" type="submit" value="Login" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login
