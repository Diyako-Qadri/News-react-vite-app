import styles from './ImageArticle.module.css';
import { getImageURL, getArticle } from '../../../utils/functions';


const ImageArticle = ({headline, deck, category, image, ImgUpdateFunction}) => {

  const handleClick = () => {
   ImgUpdateFunction(getArticle(headline))
    {console.log(ImgUpdateFunction)}
}
  return (
    <div className={styles.ImageArticle}>
      <img className={styles.featurArticle} src={getImageURL(image)} alt="" />
     <h2 className={styles.headline} onClick={handleClick}>{headline}</h2>
      <p>{deck}</p>
      <p> <span>Category: </span>{category}</p>
    </div>
  );
};

export default ImageArticle;
