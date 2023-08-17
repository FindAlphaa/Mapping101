import styles from "./KeyWordName.module.css";
const KeywordSection = () => {
  return (
    <div className={styles.keywordSection}>
      <div className={styles.keywords}>Keywords</div>
      <div className={styles.companyList}>Company List</div>
    </div>
  );
};

export default KeywordSection;
