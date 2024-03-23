import styles from './Headline.module.css';

const Headline = ({ headline, updateFunction }) => {
//   const handleClick = () => {
//     updateFunction(headline);
//     console.log(headline)
//   };
  return (
    <h2 className={styles.headline} >
      {headline}
    </h2>
  );
};

export default Headline;


