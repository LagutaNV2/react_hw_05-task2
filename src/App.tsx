// src/App.tsx
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Weather from './components/Weather';
import LinksBlock from './components/LinksBlock';
import TVProgram from './components/TVProgram';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <NewsList />
      <SearchBar />
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Weather />
        <LinksBlock title="Карта Германии" items={["Расписания"]} />
        <TVProgram />
      </div>
      <Footer />
    </div>
  );
};

export default App;
