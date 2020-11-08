import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex" component={Pokedex} />
      </Switch>
    </Router>
  );
};

export default App;
