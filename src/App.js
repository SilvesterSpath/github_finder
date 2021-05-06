import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import NotFound from './components/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  console.log('this');
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/github_finder' component={Home} />
                <Route exact path='/github_finder/about' component={About} />
                <Route
                  exact
                  path='/github_finder/users/:login'
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
