import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Highlights from './components/Highlights/Highlights';
import { createContext, useEffect, useState } from 'react';
import LeagueInfo from './components/LeagueInfo/LeagueInfo';
import NotFound from './components/NotFound/NotFound';
import UpcommingLeague from './components/UpcommingLeague/UpcommingLeague';

export const LeaguesContext = createContext();

function App() {
  const [allLeagues, setAllLeagues] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setAllLeagues(data.leagues));
  }, []);

  return (
    <LeaguesContext.Provider value={allLeagues}>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to='/'><h2>The League Sports</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/upcomming">Upcomming League</Nav.Link>
              <Nav.Link as={Link} to="/highlights">Highlights</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/upcomming'>
            <UpcommingLeague />
          </Route>
          <Route path='/highlights'>
            <Highlights />
          </Route>
          <Route path='/league/:idLeague'>
            <LeagueInfo />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </LeaguesContext.Provider>
  );
}

export default App;
