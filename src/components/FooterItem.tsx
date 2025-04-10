import React from 'react';

interface FooterItemProps {
  text: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text, link }) => (
  <li>
    <a href={link} className="text-decoration-none">
      {text}
    </a>
  </li>
);

export default FooterItem;
