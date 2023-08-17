import styles from "./KeyWordName.module.css";
import { Link } from "react-router-dom";

const KeywordSection = () => {
  return (
    <div className={styles.keywordSection}>
      <div className={styles.keywords}>Keywords</div>
      <Link to="/company" className={styles.navLink}>
        <div className={styles.companyList}>Company List</div>
      </Link>
    </div>
  );
};

export default KeywordSection;
