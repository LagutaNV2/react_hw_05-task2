// src/components/NewsItem.tsx
interface NewsItemProps {
    icon: string;
    text: string;
    link: string;
  }

  /**
   * Элемент списка новостей
   */
  const NewsItem = ({ icon, text, link }: NewsItemProps) => {
    return (
      <li>
        <span>{icon}</span>
        <a href={link}>{text}</a>
      </li>
    );
  };

  export default NewsItem;
