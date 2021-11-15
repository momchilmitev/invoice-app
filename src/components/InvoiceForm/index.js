import './InvoiceForm.scss';
import DeleteIcon from '../../assets/icons/icon-delete.svg';

const InvoiceForm = ({ type }) => {
  return (
    <section className="form__wrapper">
      <form className="form__container">
        <h1 className="form__title">
          {type === 'create' ? 'New Invoice' : 'Edit #897v7b8b7vc7'}
        </h1>
        <h4>Bill From</h4>
        <div>
          <p>Street Address</p>
          <input type="text" />
        </div>
        <div className="form__address-details">
          <div>
            <p>City</p>
            <input type="text" />
          </div>
          <div>
            <p>Post Code</p>
            <input type="text" />
          </div>
          <div>
            <p>Country</p>
            <input type="text" />
          </div>
        </div>
        <h4>Bill To</h4>
        <div>
          <p>Client Name</p>
          <input type="text" />
        </div>
        <div>
          <p>Client Email</p>
          <input type="text" />
        </div>
        <div>
          <p>Street Address</p>
          <input type="text" />
        </div>
        <div className="form__address-details">
          <div>
            <p>City</p>
            <input type="text" />
          </div>
          <div>
            <p>Post Code</p>
            <input type="text" />
          </div>
          <div>
            <p>Country</p>
            <input type="text" />
          </div>
        </div>
        <div className="form__time">
          <div>
            <p>Invoice Date</p>
            <input type="date" />
          </div>
          <div>
            <p>Payment Terms</p>
            <select>
              <option value="01">Next 1 Day</option>
              <option value="07">Next 7 Day</option>
              <option value="14">Next 14 Day</option>
              <option value="30">Next 30 Day</option>
            </select>
          </div>
        </div>
        <div>
          <p>Project Description</p>
          <input type="text" />
        </div>
        <h4>Item List</h4>
        <div className="item__properties">
          <span>Item Name</span>
          <span>Qty.</span>
          <span>Price</span>
          <span>Total</span>
          <span>Delete</span>
        </div>
        {/* <div className="item__container" >
        <span>{ item.name }</span>
        <span>{ item.quantity }</span>
        <span>{ item.price }</span>
        <span>{ item.total }</span>
        <img src={DeleteIcon} className="item__icon" alt="delete icon" />
      </div> */}
        <form className="item__form">
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Item Quantity" />
          <input type="number" placeholder="Item Price" />
          <button className="btn btn--white">+ Add New Item</button>
        </form>
      </form>
      <section className="form__actions">
        {type === 'create' ? (
          <div>
            <button className="btn btn--white">Discard</button>
            <button className="btn btn--black">Save as Draft</button>
            <button className="btn btn--purple">Save & Send</button>
          </div>
        ) : (
          <div>
            <button className="btn btn--white">cancel</button>
            <button className="btn btn--purple">Save Changes</button>
          </div>
        )}
      </section>
    </section>
  );
};

export default InvoiceForm;
