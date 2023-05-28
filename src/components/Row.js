import styles from "./Row.module.css";

const Row = ({ guess }) => {
  if (guess) {
    return (
      <div className={styles.tile}>
        {guess.map((guess, i) => {
          return <div key={i}>{guess.key}</div>;
        })}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.tile}>1</div>
      <div className={styles.tile}>2</div>
      <div className={styles.tile}>3</div>
      <div className={styles.tile}>4</div>
      <div className={styles.tile}>5</div>
      <div className={styles.tile}>6</div>
      <div className={styles.tile}>7</div>
      <div className={styles.tile}>8</div>
    </div>
  );
};

export default Row;
