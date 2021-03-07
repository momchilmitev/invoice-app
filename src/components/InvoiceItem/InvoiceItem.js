import './InvoiceItem.scss';
import arrow from '../../assets/icons/icon-arrow-right.svg';

function InvoiceItem({ invoice }) {
  return (
    <article className="item">
      <p className="item__id">#{invoice.id}</p>
      <p className="item__date">{invoice.paymentDue}</p>
      <p className="item__name">{invoice.clientName}</p>
      <p className="item__price">${invoice.total}</p>
      <p className={`item__status item__status--${invoice.status}`}>
        <span></span>
        {invoice.status}
      </p>
      <p className="item__arrow">
        <img src={arrow} alt="arrow-right" />
      </p>
    </article>
  );
}

export default InvoiceItem;
