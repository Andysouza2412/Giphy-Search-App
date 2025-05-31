import React from 'react';
import GifCard from './GifCard';
import { GifData } from '../types';

interface GifGridProps {
  gifs: GifData[];
  loading: boolean;
}

const GifGrid: React.FC<GifGridProps> = ({ gifs, loading }) => {
  if (!loading && gifs.length === 0) {
    return (
      <p className="empty-state">
        Try searching something like <em>"magic"</em> 🐱
      </p>
    );
  }

  if (gifs.length === 0) {
    return null;
  }

  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifGrid;
