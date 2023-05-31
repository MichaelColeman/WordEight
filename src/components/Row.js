import styles from "./Row.module.css";

const Row = ({ guess }) => {
  if (guess) {
    return (
      <div className={styles.row}>
        {guess.map((guess, i) => {
          return (
            <div className={styles.tile} key={i}>
              <span>{guess.key}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.tile}>
        <span className={styles.text}>1</span>
      </div>
      <div className={styles.tile}>
        <span className={styles.text}>2</span>
      </div>
      <div className={styles.tile}>
        <span className={styles.text}>3</span>
      </div>
      <div className={styles.tile}>
        <span className={styles.text}>4</span>
      </div>
      <div className={styles.tile}>
        <span className={styles.text}>5</span>
      </div>
      <div className={styles.tile}>
        <span className={styles.text}>6</span>
      </div>
      <div className={styles.tile}>
        <span>7</span>
      </div>
      <div className={styles.tile}>
        <span>8</span>
      </div>
    </div>
  );
};

export default Row;
