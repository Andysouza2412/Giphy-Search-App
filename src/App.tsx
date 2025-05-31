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

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=20`,
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app-background">
      <SearchHeader
        searchTerm={searchTerm}
        loading={loading}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />

      <main className="main-container">
        <GifGrid gifs={gifs} loading={loading} />
      </main>

      <footer className="footer-text">
        Made with 💖 using Baseline from Devika
      </footer>
    </div>
  );
}

export default App;
