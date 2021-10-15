import './InvoiceFilter.scss';
import { useState } from 'react';

const InvoiceFilter = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterClassName = isOpen ? 'filter__filters isOpen' : 'filter__filters';
  const arrowClassName = isOpen ? 'filter__arrow filter__arrow--rotated' : 'filter__arrow';

  return (
    <div className="filter" onClick={() => setIsOpen(!isOpen)}>
      Filter <span className={arrowClassName}></span>
      <div className={filterClassName}>
        <div className="filter__filter">
          <input type="checkbox" /> Draft
        </div>
        <div className="filter__filter">
          <input type="checkbox" /> Pending
        </div>
        <div className="filter__filter">
          <input type="checkbox" /> Paid
        </div>
      </div>
    </div>
  );
};

export default InvoiceFilter;
