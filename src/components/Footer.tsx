// src/components/Footer.tsx
// отображает футер с несколькими секциями
// принимает массив секций с заголовками и элементами в качестве пропсов
// используется в основном приложении

import React from 'react';
import FooterList from './FooterList';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Посещаемое',
      items: [
        { text: 'Недвижимость — о сталинках', link: '#' },
        { text: 'Маркет — люстры и светильники', link: '#' },
        { text: 'Авто.ру — привод 4х4 до 500 000', link: '#' },
      ],
    },
    {
      title: 'Другие сервисы',
      items: [
        { text: 'Яндекс.Дзен', link: '#' },
        { text: 'Яндекс.Видео', link: '#' },
        { text: 'Яндекс.Картинки', link: '#' },
      ],
    },
    {
      title: 'Социальные сети',
      items: [
        { text: 'Facebook', link: '#' },
        { text: 'Twitter', link: '#' },
        { text: 'Instagram', link: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-light py-3 mt-5">
      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <FooterList key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
