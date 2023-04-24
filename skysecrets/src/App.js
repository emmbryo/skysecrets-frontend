import Moon from "./components/Moon"
import Header from "./components/Header"
import Aurora from "./components/Aurora"
import Image from "./components/Image"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Moon />
          </Route>
          <Route path="/aurora">
           <Aurora /> 
          </Route>
          <Route path="/image">
           <Image /> 
          </Route> 
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
