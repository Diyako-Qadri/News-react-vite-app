
import styles from './CompleteArticle.module.css'
import { getImageURL } from "../../utils/functions"


const CompleteArticle = ({headline, deck, story, category, image, updateFunction}) => {


   const handleClick = () => {
    updateFunction(headline === null)
    {console.log(headline)}
}

    return (
        
        <div className={styles.CompleteArticle}>
            <img className={styles.image} src={getImageURL(image)} alt="" />
            <h2> {headline} {deck}</h2>
            <p className={styles.story}>{story}</p>
            <div className={styles.btnContainer}>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <button className={styles.closeBtn} onClick={handleClick}>Close</button>
            </div>
            
        </div>
    )
}

export default CompleteArticle





