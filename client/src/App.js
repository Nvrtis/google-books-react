import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Save from './pages/save'
import Home from './pages/home'
import Nav from './components/nav/nav'
import Header from './components/header/header'

function App() {
  return (
    <Router>
      <Header/>
      <Nav />
      <Switch>
        <Route path="/Save">
          <Save />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
