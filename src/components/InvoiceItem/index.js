import './InvoiceItem.scss';
import rightArrow from '../../assets/icons/icon-arrow-right.svg';

const InvoiceItem = ({ invoice }) => {
  console.log(invoice);
  return (
    <article className="item">
      <p className="item__id">#{invoice.id}</p>
      <p className="item__date">{'12 Oct 2021'}</p>
      <p className="item__name">{invoice.clientName}</p>
      <p className="item__price">${invoice.total}</p>
      <p className="item__status">
        <span></span>
        {invoice.status}
      </p>
      <p className="item__arrow">
        <img src={rightArrow} alt="arrow-right" />
      </p>
    </article>
  );
};

export default InvoiceItem;
