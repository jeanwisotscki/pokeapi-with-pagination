import styles from "./index.module.css";

export const NavigationButton = ({ children, onClick, floatRight = false }) => {
  return (
    <button
      style={{ float: floatRight ? "right" : "left" }}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};
