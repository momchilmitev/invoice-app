import './InvoiceItemList.scss';
import InvoiceItem from '../InvoiceItem';

const InvoiceItemList = ({ items }) => {
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
    </section>
  );
};

export default InvoiceItemList;
