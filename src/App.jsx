import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FrontPage from './components/FrontPage/index.jsx';
import { useState } from 'react';
import SelectedCategory from './components/SelectedCategory/index.jsx';
import {
  allCrimesArticle,
  allInternationallsArticle,
  allSportsArticle,
  allSwedisgArticle,
  allentertainmentsArticle,
} from './Data/data.js';
import CurrentArticle from "./components/CurrentArticle/index.jsx";

const ArticleArray = {
  sweden: allSwedisgArticle,
  sport: allSportsArticle,
  international: allInternationallsArticle,
  entertainment: allentertainmentsArticle,
  crime: allCrimesArticle,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  return (
    <>
      <Header pagetitle="NEWS FOR TODAY" />
      <Navbar updateSelectedCategory={setSelectedCategory} articleUpdateFunction={setCurrentArticle}/>
      
      {currentArticle ? <CurrentArticle article={currentArticle} />
      :  selectedCategory ? <SelectedCategory category={ArticleArray[selectedCategory]} SCupdateFunction={setCurrentArticle}  />
      : <FrontPage FpUpdateFunction={setCurrentArticle}/> 
      }
      <Footer title="Footer" />
    </>
  );
}

export default App;
