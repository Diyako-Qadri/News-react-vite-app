import styles from "./MainArticle.module.css"
import { getImageURL, getArticle } from "../../../utils/functions"

const MainArticle = ({headline, deck, story, category, image, MaUpdateFunction}) => {

    const handleClick = () => {
        MaUpdateFunction(getArticle(headline))
         {console.log(MaUpdateFunction)}
     }
    return (
        <div className={styles.MainArticle}>
            <img className={styles.image} src={getImageURL(image)} alt="" />
            <h2 className={styles.headline} onClick={handleClick}>{headline}</h2>
            <h4> {deck}</h4>
            <p>{story.slice(0, 200)}...</p>
            <p><span>Category: </span>{category}</p>
        </div>
    )
}

export default MainArticle


