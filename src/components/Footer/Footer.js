import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Info Section */}
      <div className={styles.info}>
        <p className={styles.findalphaKorea}>
          웹사이트 제공자: FindAlpha Korea, private unlimited company | 연락처:
          010-9906-1834
        </p>
        <p className={styles.findalphaKorea}>
          사업자 등록 번호: 123-456-78910 | FindAlpha는 정보통신판매 중개자로
          Mapping 101 Platform 을 통하여 수요자와 증권사 사이에 이루어지는
          정보통신판매의 당사자가 아닙니다.
        </p>
      </div>

      {/* Footer Tabs */}
      <div className={styles.footerTabs}>
        <div className={styles.findalphaInc}>FindAlpha, Inc.</div>
        <div className={styles.findalphaInc}>개인정보 취급방침</div>
        <div className={styles.findalphaInc}>이용 약관</div>
        <div className={styles.findalphaInc}>사이트맵</div>
        <div className={styles.findalphaInc}>환불 정책</div>
      </div>

      {/* Under Navbar */}
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            <div className={styles.label}>
              <div className={styles.logo}>Mapping 101</div>
            </div>
          </Link>
          <Link to="/" className={styles.navLink}>
            <div className={styles.buttonStraight}>
              <div className={styles.smallButton}>HOME</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
