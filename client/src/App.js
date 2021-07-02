import React from 'react';
import './App.css';
import Home from './components/Home.js';
import MeetRoom from './components/MeetRoom.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/room/:roomId" component={MeetRoom} />
          <Route render={ () => <h1>404 Error</h1> } />
        </Switch>
  
    </BrowserRouter>
   // <Home />
  );
}


export default App;