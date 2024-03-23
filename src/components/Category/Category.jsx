import styles from './Category.module.css';
import ImageArticle from '../Article/ImageArticle/ImageArticle';

const Category = ({ title, articles, CupdateFunction }) => {
  
  return (
    <div className={styles.category}>
      <h3>{title}</h3>
      <div className={styles.categoryArticle}>
        {articles.map((article, index) => {
          return <ImageArticle key={index} {...article} ImgUpdateFunction={CupdateFunction} />;
        })}
      </div>
    </div>
  );
};

export default Category;
