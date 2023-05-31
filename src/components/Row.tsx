import styles from "./Row.module.css";

type RowProps = { formattedGuess: formattedGuess } | { currentGuess: string };

const Row = ({ formattedGuess, currentGuess }: { formattedGuess: formattedGuess; currentGuess?: string }) => {
    if (formattedGuess[0].result) {
        return (
            <div className={styles.row}>
                {formattedGuess.map((letter, i) => {
                    return (
                        <div className={`${styles.tile} ${letter.result}`} key={i}>
                            <span>{letter.key}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    if (currentGuess) {
        let letterArray = currentGuess.split("");
        while (letterArray.length < 8) {
            letterArray.push("");
        }
        return (
            <div className={styles.row}>
                {letterArray.map((letter, i) => {
                    return (
                        <div className={styles.tile} key={i}>
                            <span>{letter}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={styles.row}>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span className={styles.text}></span>
            </div>
            <div className={styles.tile}>
                <span></span>
            </div>
            <div className={styles.tile}>
                <span></span>
            </div>
        </div>
    );
};

export default Row;
