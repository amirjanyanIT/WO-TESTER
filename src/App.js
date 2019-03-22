import React, { Component } from 'react';

// Styles
import './styles/index.css';
import './styles/SignIn.css';
import './styles/SideBar.css';
import './styles/Content.css';
import './styles/Title.css';


// Main Components
import SignIn from './components/SignIn';
import Index from './components/index';
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/signIn" component={SignIn} />
        </div>
      </Router>
    );
  }
}



export default App;
