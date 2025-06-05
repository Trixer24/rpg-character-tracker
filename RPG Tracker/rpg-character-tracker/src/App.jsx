import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import ImportExport from './pages/ImportExport';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/import-export" component={ImportExport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;