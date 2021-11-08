import './InvoiceItemList.scss';
import InvoiceItem from '@components/InvoiceItem';

const InvoiceItemList = ({ items, invoiceTotal }) => {
  return (
    <section class="invoice-item-list">
      <section class="invoice-item-list__header">
        <p>Item Name</p>
        <p>QTY. & Price</p>
        <p>Total</p>
      </section>
      {items.map((item) => (
        <InvoiceItem key={item.name} item={item} />
      ))}
      <section className="invoice-item-list__total">
        <p>Amount Due</p>
        <p>$ {invoiceTotal}</p>
      </section>
    </section>
  );
};

export default InvoiceItemList;
