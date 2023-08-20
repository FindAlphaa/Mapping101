import React from "react";
import styles from "./IntroSection.module.css";
import SearchBarstyles from "../SearchBar/SearchBar.module.css";

const IntroSection = () => {
  return (
    <div className={styles.introSection}>
      <b className={styles.mapping101}>
        <p className={styles.p}>쉬운 투자 정보 한눈에 보기는?</p>
        <p className={styles.p}>Mapping 101</p>
        <div className={SearchBarstyles.SearchBar}></div>
      </b>
    </div>
  );
};

export default IntroSection;
