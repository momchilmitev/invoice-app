import './InvoiceFilter.scss';
import { useState } from 'react';

const InvoiceFilter = ({ toggleFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterClassName = isOpen ? 'filter__filters isOpen' : 'filter__filters';
  const arrowClassName = isOpen ? 'filter__arrow filter__arrow--rotated' : 'filter__arrow';

  return (
    <div className="filter" onClick={() => setIsOpen(!isOpen)}>
      Filter <span className={arrowClassName}></span>
      <div className={filterClassName}>
        <div className="filter__filter">
          <label htmlFor="draft">
            <input id="draft" type="checkbox" onChange={(e) => toggleFilters(e)} /> Draft
          </label>
        </div>
        <div className="filter__filter">
          <label htmlFor="pending">
            <input id="pending" type="checkbox" onChange={(e) => toggleFilters(e)} /> Pending
          </label>
        </div>
        <div className="filter__filter">
          <label htmlFor="paid">
            <input id="paid" type="checkbox" onChange={(e) => toggleFilters(e)} /> Paid
          </label>
        </div>
      </div>
    </div>
  );
};

export default InvoiceFilter;
