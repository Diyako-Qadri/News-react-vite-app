import styles from './FeaturedArticle.module.css';
import ImageArticle from '../Article/ImageArticle/ImageArticle';
import { sportsArray } from '../../Data/data.js';

const FeaturedArticle = ({FaUpdateFunction}) => {
      
  return (
    <div className={styles.FeaturedArticle}>
      {sportsArray.map((article, index) => {
        return <ImageArticle key={index} {...article} ImgUpdateFunction={FaUpdateFunction}/>;
      })}
    </div>
  );
};

export default FeaturedArticle;
