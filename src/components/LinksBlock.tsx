// src/components/LinksBlock.tsx
interface LinksBlockProps {
    title: string;
    items: string[];
  }

  /**
   * Блок с заголовком и списком ссылок
   */
  const LinksBlock = ({ title, items }: LinksBlockProps) => {
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
