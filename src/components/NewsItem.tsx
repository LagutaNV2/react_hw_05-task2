// src/components/NewsItem.tsx
/**
* Элемент списка новостей
**/

import React from 'react';

interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps>  = ({ icon, text, link }) => {
  return (
    <li>
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NewsItem;
