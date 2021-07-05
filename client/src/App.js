//Imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MeetRoom from './components/MeetRoom/MeetRoom';
//---------------------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      {/* Loads the appropriate page depending on the path/url */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/room/:roomId" component={MeetRoom} />
        </Switch>

    </BrowserRouter>
  );
}

export default App;
