//imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Home/Home';
import Room from './components/MeetRoom/MeetRoom'
//-----------------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/room/:roomId" component={Room} />
        </Switch>
  
    </BrowserRouter>
  );
}


export default App;
