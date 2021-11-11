import './InvoiceForm.scss';

const InvoiceForm = ({ type }) => {
  return (
    <section class="form__wrapper">
      <form class="form__container">
        <h1 class="form__title">
          {type ? `Edit #897v7b8b7vc7` : 'New Invoice'}
        </h1>
        <h4>Bill From</h4>
        <div>
          <p>Street Address</p>
          <input type="text" />
        </div>
        <div class="form__address-details">
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
        <div class="form__address-details">
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
        <div class="form__time">
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
        <div class="item__properties">
          <span>Item Name</span>
          <span>Qty.</span>
          <span>Price</span>
          <span>Total</span>
          <span>Delete</span>
        </div>
        {/* <div class="item__container" >
        <span>{ item.name }</span>
        <span>{ item.quantity }</span>
        <span>{ item.price }</span>
        <span>{ item.total }</span>
        <img class="item__icon" alt="delete icon" />
      </div> */}
        <form class="item__form">
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Item Quantity" />
          <input type="number" placeholder="Item Price" />
          <button class="btn btn--white">+ Add New Item</button>
        </form>
      </form>
      <section class="form__actions">
        <div>
          <button class="btn btn--white">Discard</button>
          <button class="btn btn--black">Save as Draft</button>
          <button class="btn btn--purple">Save & Send</button>
        </div>
        <div>
          <button class="btn btn--white">cancel</button>
          <button class="btn btn--purple">Save Changes</button>
        </div>
      </section>
    </section>
  );
};

export default InvoiceForm;
