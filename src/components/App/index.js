import './App.scss';
import { Suspense, lazy, useContext, useState, useEffect } from 'react';
import {collection, getDocs  } from 'firebase/firestore/lite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { db } from '../../firebase/';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '@components/Loader';
import HomePage from '@pages/Home';
import Aside from '@components/Aside';
import SignIn from '@components/SignIn';
const CreatePage = lazy(() => import('@pages/Create'));
const EditPage = lazy(() => import('@pages/Edit'));
const ViewPage = lazy(() => import('@pages/View'));

function App() {
  const [invoices, setInvoices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getInvoices() {
      const invoicesCol = collection(db, 'invoices');
      const invoicesSnapshot = await getDocs(invoicesCol);
      const invoicesList = invoicesSnapshot.docs.map(doc => {
        console.log(doc.id);
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      setInvoices([...invoices, ...invoicesList]);
    }

    getInvoices();
  }, []);

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
              <Route path="/home">
                <HomePage invoices={invoices} />
              </Route>
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
