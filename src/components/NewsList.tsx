// src/components/NewsList.tsx
import NewsItem from './NewsItem';

/**
 * Список новостей с иконками
 */
const NewsList = () => {
  const news = [
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
