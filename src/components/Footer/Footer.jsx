import styles from "./Footer.module.css"

const Footer = ({title}) => {
    return (
        <footer className={styles.footer}>
            <h3>{title}</h3>
        </footer>
    )
}
export default Footer