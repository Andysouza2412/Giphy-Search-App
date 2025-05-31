import React from 'react';

interface SearchHeaderProps {
  searchTerm: string;
  loading: boolean;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchTerm,
  loading,
  onSearchTermChange,
  onSearch,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <header className="header-gradient">
      <div className="header-container">
        <h1 className="header-title">Giphy Explorer</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder="Search for GIFs..."
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={onSearch} disabled={loading} className="btn-primary">
            {loading ? (
              <span className="loading-spinner">
                <span className="loader" />
                Searching...
              </span>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
