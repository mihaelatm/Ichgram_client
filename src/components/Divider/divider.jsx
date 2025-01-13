import styles from "./divider.module.css";

function Divider() {
  return (
    <div className={styles.line}>
      <hr />
      <span>OR</span>
      <hr />
    </div>
  );
}

export default Divider;
