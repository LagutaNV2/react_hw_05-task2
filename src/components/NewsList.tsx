// src/components/NewsList.tsx
/**
* Список новостей с иконками
*/
import React from 'react';
import NewsItem, { NewsItemProps } from './NewsItem';

const NewsList: React.FC = () => {
  const news: NewsItemProps[] = [
    { icon: '🌍', text: 'Путин упростил получение...', link: '#' },
    { icon: '🌍', text: 'Реформы на Украине...', link: '#' },
  ];

  return (
    <ul>
      {news.map((n, i) => (
        <NewsItem key={i} {...n} />
      ))}
    </ul>
  );
};

export default NewsList;
