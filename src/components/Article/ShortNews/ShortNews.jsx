import styles from "./ShortNews.module.css"
import { getArticle } from "../../../utils/functions"

const ShortNews = ({headline, deck , category, SnUpdateFunction}) => {

    const handleClick = () => {
        SnUpdateFunction(getArticle(headline))
         {console.log(SnUpdateFunction)}
     }
    return (
        <div className={styles.shortNews}>
            <h2  className={styles.headline} onClick={handleClick}>{headline} {deck}</h2>
            <p>{category}</p>
        </div>
    )
}

export default ShortNews