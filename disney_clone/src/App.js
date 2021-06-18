import React from 'react';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Detail from './Component/Detail';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
