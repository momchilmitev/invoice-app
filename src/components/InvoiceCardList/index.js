import './InvoiceCardList.scss';
import { Link } from 'react-router-dom';
import InvoiceCard from '../InvoiceCard';

const InvoiceCardList = ({ invoices }) => {
  return (
    <section>
      {invoices.map((invoice) => (
        <Link to={`/view/${invoice.id}`} key={invoice.id}>
          <InvoiceCard invoice={invoice} />
        </Link>
      ))}
    </section>
  );
};

export default InvoiceCardList;
