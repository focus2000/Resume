import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
    <div className="App">
    <div className="container app_container">
      <div className="row app_row">
      <div className="col-lg-3">
          <Sidebar/>
    
    </div>
    <div className ="col-lg-9 app_main-content">
      <Navbar/>
      <Switch>
      <Route exact path ="/" component = {About}/>
      <Route path ="/resume" component={Resume}/>
      <Route path ="/projects" component={Projects}/>
      <Route>
        <Redirect to="/"/>
      </Route>
      </Switch>
     </div>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
