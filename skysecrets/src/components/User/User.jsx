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
  const [currentForm, setCurrentForm] = useState('login')

  /**
   * Toggles the form between login - register.
   *
   * @param {string} formName - the form to switch to.
   */
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="user-container">
      { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> }
    </div>
  )
}

export default User
