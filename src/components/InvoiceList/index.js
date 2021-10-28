import './InvoiceList.scss';
import { Link } from 'react-router-dom';
import InvoiceItem from '../InvoiceItem';

const InvoiceList = ({ invoices }) => {
  return (
    <section>
      {invoices.map((invoice) => (
        <Link to={`/view/${invoice.id}`}>
          <InvoiceItem key={invoice.id} invoice={invoice} />
        </Link>
      ))}
    </section>
  );
};

export default InvoiceList;
