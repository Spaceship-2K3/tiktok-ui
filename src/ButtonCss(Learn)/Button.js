import styles from "./Button.module.css";
import clsx from "clsx";
// ! classnames
// ! clsx

// todo : npmtrends classname clsx
// todo : Vd 1:
/*function Button() {
    return (
        <div>
            <button className={styles.btn}>Click me !</button>
            <button className={`${styles.btn} ${styles.active}`}>
                Click me !
            </button>
            <button className={[styles.btn, styles.btnGreen].join(" ")}>
                Click me !
            </button>
            <button className={clsx(styles.btn, styles.btnOrange)}>
                Click me !
            </button>
            <button
                className={clsx(styles.btn, {
                    [styles.active]: false,
                })}
            >
                Click me !
            </button>
        </div>
    );
}*/
// todo : Vd 2
function Button({ primary }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        "d-flex": true,
    });
    return (
        <div>
            <button className={classes}>Click me !</button>
        </div>
    );
}
export default Button;
