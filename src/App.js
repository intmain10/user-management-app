import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
