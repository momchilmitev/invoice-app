import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Aside from '../Aside/Aside';
import Home from '../pages/Home';
import View from '../pages/View';

function App() {
  return (
    <div className="app">
      <Aside />
      <main className="main">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/invoice/:id">
            <View />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
