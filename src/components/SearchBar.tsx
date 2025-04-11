// src/components/SearchBar.tsx
/**
 * Панель поиска с логотипом, инпутом и кнопкой
 */
import React from 'react';

const SearchBar: React.FC = () => {
    return (
      <div>
        <h1>Яндекс</h1>
        <input type="text" placeholder="Найдётся всё..." />
        <button>Найти</button>
      </div>
    );
  };

  export default SearchBar;
