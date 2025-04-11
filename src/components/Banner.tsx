// src/components/Banner.tsx
/**
 * Горизонтальный баннер под поиском
 */
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div>
      <img
        src="/assets/movie-banner.png"
        alt="Пожар в борделе"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Banner;
