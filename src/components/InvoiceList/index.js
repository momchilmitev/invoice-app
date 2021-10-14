import './InvoiceList.scss';
import InvoiceItem from '../InvoiceItem';

const InvoiceList = ({ invoices }) => {
  return <section>
    {invoices.map(invoice => <InvoiceItem invoice={invoice} />)}
  </section>;
};

export default InvoiceList;
