import './Home.scss';
import { useState, useEffect } from 'react';
import InvoiceFilter from '../components/InvoiceFilter';
import InvoiceCardList from '../components/InvoiceCardList';

const Home = ({ invoices, setInvoices }) => {
  const [filters, setFilters] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  function toggleFilters(e) {
    if (e.target.checked) {
      setFilters([...filters, e.target.id]);
    } else {
      setFilters([...filters.filter((item) => item !== e.target.id)]);
    }
  }

  useEffect(() => {
    if (filters.length > 0) {
      setFilteredInvoices([
        ...invoices.filter((invoice) => filters.includes(invoice.status)),
      ]);
    } else {
      setFilteredInvoices([...invoices]);
    }
  }, [filters, invoices]);

  return (
    <>
      <section className="info">
        <h2>
          Invoices
          <span>{invoices.length ? invoices.length : 'No'} invoices</span>
        </h2>
        <div className="info__actions">
          <InvoiceFilter toggleFilters={toggleFilters} />
          <button className="btn btn--create">New</button>
        </div>
      </section>
      <InvoiceCardList invoices={filteredInvoices} />
    </>
  );
};

export default Home;
