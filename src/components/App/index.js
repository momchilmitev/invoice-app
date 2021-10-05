import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Loader from '@components/Loader';
import HomePage from '@pages/Home';
import Aside from '@components/Aside';
const CreatePage = lazy(() => import('@pages/Create'));
const EditPage = lazy(() => import('@pages/Edit'));
const ViewPage = lazy(() => import('@pages/View'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Aside />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/view" component={ViewPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
