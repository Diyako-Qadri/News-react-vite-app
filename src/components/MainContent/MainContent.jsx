import styles from "./MainContent.module.css"
import RecentNews from "../RecentNews/RecentNews"
import MainArticle from "../Article/MainArticle/MainArticle"
import FeaturedArticle from "../FeaturedArticle/FeaturedArticle"
import { mainArticle } from "../../Data/data"
const MainContent = ({McUpdateFunction}) => {
    return (
        <section className={styles.MainContent} >
        <RecentNews RnUpdateFunction={McUpdateFunction}/>
        <MainArticle {...mainArticle} MaUpdateFunction={McUpdateFunction}/> 
        <FeaturedArticle FaUpdateFunction={McUpdateFunction}/>          
        </section>
    )
}

export default MainContent