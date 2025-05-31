import React from 'react';
import { GifData } from '../types';

interface GifCardProps {
  gif: GifData;
}

const GifCard: React.FC<GifCardProps> = ({ gif }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(gif.images.original.url);
  };

  const handleOpenGiphy = () => {
    window.open(gif.url, '_blank');
  };

  return (
    <div className="gif-card">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        loading="lazy"
        className="gif-image"
      />
      <div className="gif-actions">
        <div className="button-group">
          <button onClick={handleCopyUrl} className="btn-copy">
            📋 Copy URL
          </button>
          <button onClick={handleOpenGiphy} className="btn-external">
            🔗 Giphy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifCard;
