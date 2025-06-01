import React, { useState } from 'react';
import axios from 'axios';
import SearchHeader from './components/SearchHeader';
import GifGrid from './components/GifGrid';
import { GifData } from './types';
import './App.css';

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState<GifData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25`,
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app-background">
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="relative z-10">
        <SearchHeader
          searchTerm={searchTerm}
          loading={loading}
          onSearchTermChange={setSearchTerm}
          onSearch={handleSearch}
        />

        <main className="main-container">
          <GifGrid gifs={gifs} loading={loading} searched={searched} />
        </main>

        <footer className="footer-text">
          <p className="text-sm">
            Made with <span className="text-pink-400 animate-pulse">💖</span>{' '}
            using <span className="text-gradient font-semibold">Baseline</span>{' '}
            from <span className="text-gradient font-semibold">devika</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
