import './Home.scss';
import InvoiceFilter from '../components/InvoiceFilter';
import InvoiceList from '../components/InvoiceList';

const Home = ({ invoices }) => {
  return <>
      <section className="info">
      <h2>
        Invoices
        <span>{ invoices.length ? invoices.length : "No" } invoices</span>
      </h2>
      <div className="info__actions">
        <InvoiceFilter />
        <button className="btn btn--create">New</button>
      </div>
    </section>
    <InvoiceList invoices={invoices} />
  </>
}

export default Home
