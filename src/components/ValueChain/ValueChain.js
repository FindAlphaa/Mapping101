import React from "react";
import styles from "./ValueChain.module.css";

function ValueChain() {
  return (
    <div className={styles.valueChainsection}>
      <div className={styles.valueChainVisual}>
        <div className={styles.companyList}>
          <div className={styles.companySection}></div>
        </div>
        <div className={styles.valueChain} />
      </div>
    </div>
  );
}

export default ValueChain;
