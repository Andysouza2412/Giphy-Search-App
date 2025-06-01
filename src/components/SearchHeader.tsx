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
    <header className="header-gradient glass">
      <div className="header-container">
        <h1 className="header-title animate-float">
          <span className="text-gradient">Giphy</span>{' '}
          <span className="text-white">Explorer</span>
        </h1>
        <p className="text-center text-gray-300 mb-8 text-lg">
          Discover and share amazing GIFs from around the web
        </p>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder="Search for magic, cats, or anything..."
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button
            onClick={onSearch}
            disabled={loading}
            className="btn-primary animate-pulse-glow"
          >
            {loading ? (
              <span className="loading-spinner">
                <span className="loader" />
                <span>Searching</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
