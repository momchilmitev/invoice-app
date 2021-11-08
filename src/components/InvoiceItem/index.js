import './InvoiceItem.scss';

const InvoiceItem = ({ item }) => {
  return (
    <article className="invoice-item">
      <div>
        <p className="invoice-item__name">{item.name}</p>
        <p class="invoice__item__quantity">
          {item.quantity} x $ {item.price}
        </p>
      </div>
      <p class="invoice__item__total">$ {item.total}</p>
    </article>
  );
};

export default InvoiceItem;
