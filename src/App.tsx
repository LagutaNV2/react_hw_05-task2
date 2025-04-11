// src/App.tsx
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Weather from './components/Weather';
import LinksBlock, { LinksBlockProps } from './components/LinksBlock';
import TVProgram from './components/TVProgram';
import Footer from './components/Footer';

const App: React.FC = () => {
  const linksBlockProps: LinksBlockProps = {
    title: "Карта Германии",
    items: ["Расписания"],
  };

  return (
    <div>
      <Header />
      <NewsList />
      <SearchBar />
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Weather />
        <LinksBlock {...linksBlockProps} />
        <TVProgram />
      </div>
      <Footer />
    </div>
  );
};

export default App;
