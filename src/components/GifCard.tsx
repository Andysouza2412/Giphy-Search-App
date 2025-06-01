import React, { useState } from 'react';
import { GifData } from '../types';

interface GifCardProps {
  gif: GifData;
}

const GifCard: React.FC<GifCardProps> = ({ gif }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(gif.images.original.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGiphy = () => {
    window.open(gif.url, '_blank');
  };

  return (
    <div className="gif-card group">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        loading="lazy"
        className="gif-image"
      />
      <div className="gif-actions">
        <h3 className="text-white font-semibold text-sm mb-3 line-clamp-1">
          {gif.title || 'Untitled GIF'}
        </h3>
        <div className="button-group">
          <button onClick={handleCopyUrl} className="btn-copy group/btn">
            <span className="flex items-center gap-2 justify-center">
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 group-hover/btn:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </>
              )}
            </span>
          </button>
          <button onClick={handleOpenGiphy} className="btn-external group/btn">
            <span className="flex items-center gap-2 justify-center">
              <svg
                className="w-4 h-4 group-hover/btn:rotate-45 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifCard;
