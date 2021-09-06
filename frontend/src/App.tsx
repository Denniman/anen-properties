import React, { Suspense} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';


function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
     </Router>
    </Suspense>
  );
}

export default App;
