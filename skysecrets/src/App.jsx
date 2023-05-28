/* eslint-disable no-unused-vars */
import Moon from './components/Moon'
import Header from './components/Header'
import Aurora from './components/Aurora'
import Image from './components/Image'
import Map from './components/Map'
import Start from './components/Start'
import Planets from './components/Planets/Planets'
import Overview from './components/Overview/Overview'
import Kindex from './components/Kindex'
import Location from './components/Location'
import User from './components/User/User'
import Library from './components/Library'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import { UserContext } from './context/UserContext'
import { useState, useEffect } from 'react'

/**
 * App component.
 *
 * @returns {object} react component.
 */
function App () {
  const vasaMuseet = [59.32915892217842, 18.093897700309757]
  const [location, setLocation] = useState(vasaMuseet)
  const [user, setUser] = useState(false)

  useEffect(() => {
    /**
     * Checks if there is a valid user.
     */
    const checkUser = async () => {
      try {
        const url = 'http://localhost:8080/api/v1/account/user'
        const response = await fetch(url, {
          credentials: 'include'
        })
        if (!response.ok) {
          setUser(false)
        }
        const user = await response.json()
        if (user.user) {
          setUser(true)
        }
      } catch (error) {
        console.log(error?.message)
      }
    }
    checkUser()
  }, [])

  return (
    <Router>
      <div className="App" data-testid="app-test">
        <UserContext.Provider value={{ location, setLocation, user, setUser }}>
          <Header />
        </UserContext.Provider>
      <div className="content">
        <Switch>
          <UserContext.Provider value={{ location, setLocation, user, setUser }}>
          <Route exact path="/start">
            <Start />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
            <Route path="/aurora">
              <Aurora />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route exact path="/image">
              <Image />
            </Route>
            <Route path="/moon">
              <Moon />
            </Route>
            <Route path="/planets">
              <Planets />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/index">
              <Kindex />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
          </UserContext.Provider>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
