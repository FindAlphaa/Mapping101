import styles from "./KeyWordName.module.css";
import { Link } from "react-router-dom";
import React from "react";

const KeywordSection = React.forwardRef((props, ref) => {
  return (
    <div className={styles.keywordSection} ref={ref}>
      <div className={styles.keywords}>Other Sector</div>
      <Link to="/company" className={styles.navLink}>
        <div className={styles.companyList}>Same Sector</div>
      </Link>
    </div>
  );
});

export default KeywordSection;
