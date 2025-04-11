// src/components/FooterList.tsx
// отображает список элементов в футере
// принимает заголовок и массив элементов в качестве пропсов
// используется в компоненте Footer

import React from 'react';
import FooterItem from './FooterItem';

interface Item {
  text: string;
  link: string;
}

interface FooterListProps {
  title: string;
  items: Item[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }) => (
  <div className="col-md-4">
    <h6>{title}</h6>
    <ul className="list-unstyled">
      {items.map((item, index) => (
        <FooterItem key={index} text={item.text} link={item.link} />
      ))}
    </ul>
  </div>
);

export default FooterList;
