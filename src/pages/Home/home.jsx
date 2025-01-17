import ModalWindowPost from "../../components/ModalWindowPost/modalWindowPost";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <ModalWindowPost />
    </div>
  );
}

export default Home;
