import styles from './NavItem.module.css';

const NavItem = ({ category, updateFunction, articleUpdateFunction}) => {
    const handleClick = () => {
        {category === "Home" ? updateFunction(null) : updateFunction(category.toLowerCase())}
        articleUpdateFunction(null)
    }
  return (
    <a className={styles.navItem} onClick={handleClick}>
      {category}
    </a>
  );
};

export default NavItem;
