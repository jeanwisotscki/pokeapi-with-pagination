import styles from "./index.module.css";

export const Main = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
