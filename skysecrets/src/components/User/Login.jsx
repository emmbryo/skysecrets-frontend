/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

/**
 * Login component.
 *
 * @param {object} props - ...
 * @returns {object} react component
 */
const Login = (props) => {
  const { setUser, setLocation } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)

  const usernameRef = useRef()
  const history = useHistory()

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
  }, [showError])

  /**
   * Handles sumbit.
   *
   * @param {*} event the submitted form.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    let user
    try {
      user = await loginUser()
      const hasAccount = await userAccountStatus()
      if (!hasAccount.account) {
        const newAccount = await createUserAccount()
      } else {
        await getLocation(hasAccount.accountId)
      }
    } catch (error) {
      setError('Server not responding')
      setShowError(true)
    }

    if (user.status === 'logged in') {
      setUser(true)
      setUsername('')
      setPassword('')
      history.push('/start')
    }
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
    const url = `${process.env.REACT_APP_AUTH_API_BASE_URL}/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload)
    })

    if (response.status === 401) {
      setError('Invalid username or password, please try again')
      setShowError(true)
    } else if (!response.ok) {
      throw new Error('Server not responding')
    }

    const token = await response.json()
    return token
  }

  /**
   * Gets the user's account status.
   *
   * @returns {object} account status.
   */
  const userAccountStatus = async () => {
    const accountUrl = `${process.env.REACT_APP_API_BASE_URL}/account`
    const accountResponse = await fetch(accountUrl, {
      credentials: 'include'
    })
    if (accountResponse.status === 403) {
      setError('Credentials not valid, please try again.')
      setShowError(true)
    } else if (!accountResponse.ok) {
      throw new Error('Server not responding')
    }
    const account = await accountResponse.json()
    return account
  }

  /**
   * Creates an account for the user..
   *
   * @returns {object} account info.
   */
  const createUserAccount = async () => {
    const accountUrl = `${process.env.REACT_APP_API_BASE_URL}/account`
    const accountResponse = await fetch(accountUrl, {
      method: 'POST',
      credentials: 'include'
    })
    if (accountResponse.status === 403) {
      setError('login not valid, please try again.')
      setShowError(true)
    } else if (!accountResponse.ok) {
      throw new Error('Server not responding')
    }
    const account = await accountResponse.json()
    return account
  }

  /**
   * Gets the previously set location for user.
   *
   * @param {string} accountId - ...
   */
  const getLocation = async (accountId) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/account/${accountId}`
    const response = await fetch(url, {
      credentials: 'include'
    })
    if (!response.ok) {
      throw new Error('Server not responding')
    }
    const accountData = await response.json()
    setLocation([Number.parseFloat(accountData.location.lat), Number.parseFloat(accountData.location.lng)])
  }

  return (
    <div className="user-form-container">
      { showError && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
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
          value={username}
          onFocus={() => {
            setShowError(false)
            setError('')
          }}
          onChange={(event) => setUsername(event.target.value)}/>
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
          onFocus={() => {
            setShowError(false)
            setError('')
          }}
          onChange={(event) => setPassword(event.target.value)}/>
        <input className="submit-button" type="submit" value="Login" />
      </form>
      <button className="user-form-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}
export default Login
