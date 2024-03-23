import styles from './BreakingNews.module.css';
import { getArticle } from '../../utils/functions';

const BreakingNews = ({articleArray, updateFunction, headline}) => {

  const handleClick = () => {
    updateFunction(getArticle(headline))
    console.log(headline)
}

  return (
    <section className={styles.BreakNewsContainer}>
      <div className={styles.BreakingNews}>
        <h4>Breaking News</h4>
      </div>
      
      {articleArray.map((article, index) => <span key={index} className={styles.headline} onClick={handleClick}> {article.headline}  </span>)}
    
    </section>
  );
};

export default BreakingNews;
