import './NoInvoice.scss';
import emptyImageSrc from '@assets/images/empty.svg';

const NoInvoice = () => {
    return (
        <section className="empty__container">
        <div className="empty__main">
          <img className="empty__image" src={emptyImageSrc} alt="Expressing that there are no invoices" />
          <h3 className="empty__header">There is nothing here</h3>
          <p className="empty__description">
            Create a new invoice by clicking the <span>New</span> button and get
            started
          </p>
        </div>
      </section>
    );
}

export default NoInvoice;