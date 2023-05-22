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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import { LocationContext } from './context/LocationContext'
import { useState } from 'react'

/**
 * App component.
 *
 * @returns {object} react component.
 */
function App () {
  const vasaMuseet = [59.32915892217842, 18.093897700309757]
  const [location, setLocation] = useState(vasaMuseet)

  return (
    <Router>
      <div className="App" data-testid="app-test">
        <LocationContext.Provider value={{ location, setLocation }}>
          <Header />
        </LocationContext.Provider>
      <div className="content">
        <Switch>
          <Route exact path="/image">
            <Image />
          </Route>
          <LocationContext.Provider value={{ location, setLocation }}>
          <Route exact path="/">
            <Start />
          </Route>
            <Route path="/aurora">
              <Aurora />
            </Route>
            <Route path="/map">
              <Map />
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
          </LocationContext.Provider>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
