import Moon from "./components/Moon"
import Header from "./components/Header"
import Aurora from "./components/Aurora"
import Image from "./components/Image"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Map from "./components/Map"
import Start from "./components/Start"
import Planets from "./components/Planets"

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/image">
            <Image />
          </Route>
          <Route path="/aurora">
           <Aurora /> 
          </Route>
          <Route path="/moon">
           <Moon /> 
          </Route> 
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
