import styles from "./Loged.module.scss";

const Loged = ({ children }) => {
  return <div className={styles.loged}>{children}</div>;
};

export default Loged;