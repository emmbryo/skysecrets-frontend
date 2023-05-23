/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

/**
 * User component - for registering and login.
 *
 * @returns {object} react component
 */
const User = () => {
  const [currentForm, setCurrentForm] = useState('Login')

  return (
    <div className="user-container">
      { currentForm === 'Login' && (
        <Login />
      )}
      { currentForm === 'Register' && (
        <Register />
      )}
    </div>
  )
}

export default User
