import './Home.scss';
import InvoiceFilter from '../components/InvoiceFilter';

const Home = ({ invoices = [] }) => {
  return <>
      <section className="info">
      <h2>
        Invoices
        <span>{ invoices.length ? invoices.length : "No" } invoices</span>
      </h2>
      <div class="info__actions">
        <InvoiceFilter />
        <button className="btn btn--create">New</button>
      </div>
    </section>
  </>
}

export default Home
