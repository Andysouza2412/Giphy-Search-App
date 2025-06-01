import React from 'react';
import GifCard from './GifCard';
import { GifData } from '../types';

interface GifGridProps {
  gifs: GifData[];
  loading: boolean;
  searched: boolean;
}

const GifGrid: React.FC<GifGridProps> = ({ gifs, loading, searched }) => {
  if (loading) {
    return (
      <div className="gif-grid">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="skeleton h-52 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!searched) {
    return (
      <div className="empty-state">
        <h2 className="empty-state-text">Welcome to Giphy Explorer!</h2>
        <p className="empty-state-subtext">
          Start your journey by searching for your favorite GIFs above
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm">
            Try "space"
          </span>
          <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm">
            Try "cats"
          </span>
          <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm">
            Try "magic"
          </span>
        </div>
      </div>
    );
  }

  if (gifs.length === 0) {
    return (
      <div className="empty-state">
        <h2 className="empty-state-text">No GIFs Found</h2>
        <p className="empty-state-subtext">Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="gif-grid">
      {gifs.map((gif, index) => (
        <div
          key={gif.id}
          className="gif-item"
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          <GifCard gif={gif} />
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
