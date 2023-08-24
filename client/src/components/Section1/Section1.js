import React from "react";
import styles from "./Section1.module.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={`${styles.consumerEconomy} ${styles.enlargeOnHover}`}>
        <Link to="/graph/consumer-goods" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back5} />
          </div>
          <div className={styles.text}>
            <div className={styles.consumerGoodsRelated}>
              consumer goods related to the economy
            </div>
            <div className={styles.div}>경기 관련 소비재</div>
          </div>
          <img
            className={styles.vectorIcon}
            alt="consumer goods Icon"
            src="/shopping-cartconsumer.svg"
          />
        </Link>
      </div>

      <div className={`${styles.economy} ${styles.enlargeOnHover}`}>
        <Link to="/graph/economy" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back3} />
          </div>
          <div className={styles.text}>
            <div className={styles.industrialGoods1}>Economy</div>
            <div className={styles.div}>금융</div>
          </div>
          <img
            className={styles.vectorIcon}
            alt="Economy Icon"
            src="/growtheconomy.svg"
          />
        </Link>
      </div>

      <div className={`${styles.industrialGoods} ${styles.enlargeOnHover}`}>
        <Link to="/graph/industrial-goods" className={styles.navLink}>
          <div className={styles.back}>
            <div className={styles.back1} />
          </div>
          <div className={styles.text}>
            <div className={styles.industrialGoods1}>industrial goods</div>
            <div className={styles.div}>산업재</div>
          </div>
          <img
            className={styles.vectorIcon}
            alt="Industrial Goods Icon"
            src="/circuitindustrialgoods.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Section1;
