import styles from "./Navbar.module.css"
import NavItem from "./NavItem"
const Navbar = ({updateSelectedCategory, articleUpdateFunction}) => {

    return (
        <nav className={styles.Navbar}>
            <NavItem category="Home" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
            <NavItem category="Sweden" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
            <NavItem category="International" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
            <NavItem category="Entertainment" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
            <NavItem category="Crime" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
            <NavItem category="Sport" updateFunction={updateSelectedCategory} articleUpdateFunction={articleUpdateFunction}/>
        </nav>
    )
}

export default Navbar