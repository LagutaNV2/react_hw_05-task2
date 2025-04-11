// src/components/LinksBlock.tsx
/**
* Блок с заголовком и списком ссылок
*/
import React from 'react';

interface LinksBlockProps {
    title: string;
    items: string[];
}


const LinksBlock: React.FC<LinksBlockProps> = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinksBlock;
