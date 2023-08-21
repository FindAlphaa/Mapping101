import React from "react";
import styles from "./Section3.module.css";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div className={styles.utility}>
        <Link to="/graph/utility" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back1} />
          </div>
          <div className={styles.text}>
            <div className={styles.essentialConsumerGoods}>Utility</div>
            <div className={styles.div}>유틸리티</div>
          </div>
          <img
            className={styles.vectorIcon}
            alt="Utility Icon"
            src="compass-utility.svg"
          />
        </Link>
      </div>

      <div className={styles.energy}>
        <Link to="/graph/energy" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back3} />
          </div>
          <div className={styles.text}>
            <div className={styles.essentialConsumerGoods}>Energy</div>
            <div className={styles.div}>에너지</div>
          </div>
          <img
            className={styles.fire2Icon}
            alt="Energy Icon"
            src="Ellipse_energy.svg"
          />
        </Link>
      </div>

      <div className={styles.consumerGoods}>
        <Link to="/graph/essential-goods" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back5} />
          </div>
          <div className={styles.text}>
            <div className={styles.essentialConsumerGoods}>
              essential consumer goods
            </div>
            <div className={styles.div}>필수 소비재</div>
          </div>
          <img
            className={styles.vectorIcon1}
            alt="Essential Consumer Goods Icon"
            src="coin-stackessentialgoods.svg"
          />
        </Link>
      </div>
    </div>
  );
};
export default Section3;
