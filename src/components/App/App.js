import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Aside from '../Aside/Aside';
import View from '../pages/View';
// import CreateInvoice from '../CreateInvoice/CreateInvoice';
import InvoicesList from '../InvoicesList/InvoicesList';

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/invoices')
      .then((res) => {
        setInvoices([...res.data]);
      })
      .catch((e) => console.log(e));
  }, [invoices]);

  return (
    <div className="app">
      <Aside />
      <main className="main">
        <Router>
          <Route exact path="/">
            {/* <CreateInvoice /> */}
            <section className="info">
              <h2>
                Invoices
                <span>{invoices.length} invoices</span>
              </h2>
              <div className="info__actions">
                <div>Filter</div>
                <button>
                  <span></span>New
                </button>
              </div>
            </section>
            <InvoicesList invoices={invoices} />
          </Route>
          <Route path="/invoice/:id">
            <View />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
