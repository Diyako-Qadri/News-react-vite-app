// import { getImageURL } from '../../utils/functions';
import styles from './CurrentArticle.module.css'

const CurrentArticle = ({article}) => {
    return (
        <div className={styles.CompleteArticle}>
            {article.headline}
        </div>
    )
};

export default CurrentArticle
