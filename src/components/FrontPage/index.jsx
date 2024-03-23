import BreakingNews from '../../components/BreakingNews/BreakingNews.jsx';
import MainContent from '../../components/MainContent/MainContent.jsx';
import Category from '../../components/Category/Category.jsx';
import {
  sportsCategory,
  entertainmentsCategory,
  crimesCategory,
  worldsCategory,
  swedishCategory,
} from '../../Data/data.js';
import { breakingNews } from '../../Data/data.js';

const FrontPage = ({ FpUpdateFunction }) => {
  return (
    <>
      <BreakingNews articleArray={breakingNews} updateFunction={FpUpdateFunction} />
      <MainContent McUpdateFunction={FpUpdateFunction} />
      <Category title="Sweden" articles={swedishCategory} CupdateFunction={FpUpdateFunction} />
      <Category title="International" articles={worldsCategory} CupdateFunction={FpUpdateFunction}/>
      <Category title="Sports" articles={sportsCategory} CupdateFunction={FpUpdateFunction}/>
      <Category title="Crime" articles={crimesCategory} CupdateFunction={FpUpdateFunction} />
      <Category title="Entertainment" articles={entertainmentsCategory} CupdateFunction={FpUpdateFunction}/>
    </>
  );
};

export default FrontPage;
