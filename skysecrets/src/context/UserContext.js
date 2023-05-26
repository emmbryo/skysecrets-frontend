import { createContext } from 'react'

const user = {
  loggedIn: false
}
export const UserContext = createContext(user)
