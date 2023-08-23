import styles from "./KeyWordName.module.css";
import { Link } from "react-router-dom";
import React from "react";

const KeywordSection = React.forwardRef((props, ref) => {
  return (
    <div className={styles.keywordSection} ref={ref}>
      <div className={styles.keywords}>유사 가격 동향 산업 (동일 테마)</div>
      <Link to="/company" className={styles.navLink}>
        <div className={styles.companyList}>
          유사 가격 동향 산업 (다른 테마)
        </div>
      </Link>
    </div>
  );
});

export default KeywordSection;
