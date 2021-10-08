import './App.scss';
import { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '@components/Loader';
import HomePage from '@pages/Home';
import Aside from '@components/Aside';
import SignIn from '@components/SignIn';
const CreatePage = lazy(() => import('@pages/Create'));
const EditPage = lazy(() => import('@pages/Edit'));
const ViewPage = lazy(() => import('@pages/View'));

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      <Router>
        <Suspense fallback={<Loader />}>
          <Aside />
          <main className="main">
            <Switch>
              <Route exact path="/">
                {user ? <Redirect to="/home" /> : <SignIn />}
              </Route>
              <Route path="/home" component={HomePage} />
              <Route path="/create" component={CreatePage} />
              <Route path="/edit" component={EditPage} />
              <Route path="/view" component={ViewPage} />
            </Switch>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
