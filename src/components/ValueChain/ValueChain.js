import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ValueChain.module.css";

function ValueChain({ selectedNodeId, id }) {
  const [keywordsData, setKeywordsData] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    if (id) {
      // 두 개의 JSON 파일을 동시에 요청
      Promise.all([
        axios.get(`/data/${id}_keyword.json`), // keyword 파일
        axios.get(`/data/${id}_company.json`), // company 파일
      ])
        .then(([keywordResponse, companyResponse]) => {
          setKeywordsData(keywordResponse.data);
          setCompanyData(companyResponse.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <div className={styles.valueChainsection}>
      <div className={styles.valueChainVisual}>
        <div className={styles.companyList}>
          <div className={styles.companySection}>
            {companyData && companyData[selectedNodeId] && (
              <div className={styles.valueChain}>
                <ul className={styles.keywordList}>
                  {companyData[selectedNodeId].map((keyword, kIndex) => (
                    <li key={kIndex} className={styles.keywordItem}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.valueChain} />

        {keywordsData && keywordsData[selectedNodeId] && (
          <div className={styles.valueChain}>
            <ul className={styles.keywordList}>
              {keywordsData[selectedNodeId].map((keyword, kIndex) => (
                <li key={kIndex} className={styles.keywordItem}>
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValueChain;
