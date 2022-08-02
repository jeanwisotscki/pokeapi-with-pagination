import styles from "./index.module.css";

export const PokemonCard = (props) => {
  return <h3 className={styles.card}>{props.name}</h3>;
};
