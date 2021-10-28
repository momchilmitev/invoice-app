import './View.scss';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../firebase';
import Loader from '@components/Loader';

const View = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      const docRef = await doc(db, 'invoices', invoiceId);
      const docSnap = await getDoc(docRef);
      const id = docSnap.id;
      setInvoice({ id, ...docSnap.data() });
    };

    fetchInvoice();
  }, [invoiceId]);

  return invoice ? (
    <article className="invoice">
      <Link to="/home" className="btn btn--back">
        Go back
      </Link>
      <div className="invoice__header">
        <div className="invoice__info">
          Status
          <p className="invoice__status">
            <span></span>
            {invoice.status}
          </p>
        </div>
        <div className="invoice__actions">
          <Link to="/edit" className="btn btn--white">
            Edit
          </Link>
          <button className="btn btn--red">Delete</button>
          <button className="btn btn--purple">Mark as Paid</button>
        </div>
      </div>
      <div className="invoice__main">
        <div className="invoice__details">
          <div className="invoice__id">
            <div>
              <h3>#{invoice.id}</h3>
              <p>{invoice.description}</p>
            </div>
            <div>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>
          <div className="invoice__date">
            <div>
              <p>Invoice Date</p>
              {/* <h3>{invoice.createdAt}</h3> */}
              <p>Payment Due</p>
              {/* <h3>{invoice.paymentDue}</h3> */}
            </div>
            <div>
              <p>Bill To</p>
              <h3>{invoice.clientName}</h3>
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.postCode}</p>
              <p>{invoice.clientAddress.country}</p>
            </div>
            <div>
              <p>Sent to</p>
              <h3>{invoice.clientEmail}</h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <Loader />
  );
};

export default View;
