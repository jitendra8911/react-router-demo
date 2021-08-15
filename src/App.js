import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useParams, withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/users">Users</Link>
            </li>
            <li>
              <Link to = "/moments">Moments</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route  path={`/moments/:momentId`}>
            <Moment/>
          </Route>
          <Route  path="/moments">
            <Moments/>
          </Route>
          <Route  path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function Moments() {
  let match = useRouteMatch();
  console.log('Moments is called');

  return (
      <div>
        <h2>Moments</h2>

        <ul>
          <li>
            <Link to = {`/moments/chavithi-garelu-skewers`}>chavithi-garelu-skewers</Link>
          </li>
          <li>
            <Link to = {`/moments/chicago-trip`}>chicago-trip</Link>
          </li>
        </ul>
      </div>
  )
}

function Moment() {
  console.log('inside moment')
  let { momentId } = useParams();
  return (
      <div>
        <h3>Beautiful moment : {momentId}</h3>
      </div>
  )
}

export default App;
