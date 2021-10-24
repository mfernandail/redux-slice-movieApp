import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    
  }
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="search__input"
          placeholder="Search..."
        />
        <span className="search__focus-border"></span>
      </form>
    </div>
  )
}
