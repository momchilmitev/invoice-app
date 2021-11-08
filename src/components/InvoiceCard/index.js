import './InvoiceCard.scss';
import rightArrow from '../../assets/icons/icon-arrow-right.svg';

const InvoiceCard = ({ invoice }) => {
  const invoiceStatusClassName = `card__status card__status--${invoice.status}`

  return (
    <article className="card">
      <p className="card__id">#{invoice.id}</p>
      <p className="card__date">{'12 Oct 2021'}</p>
      <p className="card__name">{invoice.clientName}</p>
      <p className="card__price">${invoice.total}</p>
      <p className={invoiceStatusClassName}>
        <span></span>
        {invoice.status}
      </p>
      <p className="card__arrow">
        <img src={rightArrow} alt="right arrow svg" />
      </p>
    </article>
  );
};

export default InvoiceCard;
