import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/css/style.css';
import '../src/css/bootstrap.min.css';
import '../src/css/ionicons.min.css';
import '../src/css/owl.carousel.css';
import '../src/css/owl.theme.css';
import '../src/css/magnific-popup.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Router>
    </div>
  );
}

export default App;
