import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Aside from '../Aside/Aside';
import View from '../pages/View';
// import CreateInvoice from '../CreateInvoice/CreateInvoice';
import InvoicesList from '../InvoicesList/InvoicesList';
import Button from '../Button/Button';

function App() {
  const [invoices, setInvoices] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

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
      <Aside darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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
                <Button modifier="black">Save as Draft</Button>
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
