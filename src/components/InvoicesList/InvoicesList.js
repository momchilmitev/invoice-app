import InvoiceItem from '../InvoiceItem/InvoiceItem';

const InvoicesList = ({ invoices }) => {
  const renderInvoices = () => {
    return invoices.map((invoice) => (
      <InvoiceItem invoice={invoice} key={invoice.id} />
    ));
  };

  return <section>{renderInvoices()}</section>;
};

export default InvoicesList;
