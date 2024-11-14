import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const trimSearchQuery = searchQuery.trim();
    if (!trimSearchQuery) {
      toast.error('Please enter the value in the search field');
      return;
    }
    onSubmit(trimSearchQuery);
    setSearchQuery('');
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
