import styles from "./RecentNews.module.css"
import ShortNews from "../Article/ShortNews/ShortNews"
import { recentArticles } from "../../Data/data"

const RecentNews = ({RnUpdateFunction}) => {

   

    return (
        <div className={styles.RecentNews}>
            <h3>Recent News</h3>
            {recentArticles.map((article, index) => <ShortNews {...article} key={index} SnUpdateFunction={RnUpdateFunction} />)}
        </div>
    )
}

export default RecentNews