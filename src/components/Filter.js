import React from 'react';
import '../styles/RecipeBook.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by ingredient"
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
