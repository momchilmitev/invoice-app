import './InvoiceFilter.scss';
import { useState } from 'react';

const InvoiceFilter = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterClassName = isOpen ? 'filter__filters isOpen' : 'filter__filters';

  return (
    <div class="filter" onClick={() => setIsOpen(!isOpen)}>
      Filter <span class="filter__arrow"></span>
      <div class={filterClassName}>
        <div class="filter__filter">
          <input type="checkbox" /> Draft
        </div>
        <div class="filter__filter">
          <input type="checkbox" /> Pending
        </div>
        <div class="filter__filter">
          <input type="checkbox" /> Paid
        </div>
      </div>
    </div>
  );
};

export default InvoiceFilter;
