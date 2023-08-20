import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ValueChain.module.css";

function ValueChain({ selectedNodeId, id }) {
  const [OtherSectorKeyword, setOtherSectorKeyword] = useState(null);
  const [SameSectorKeyword, setSameSectorKeyword] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    if (id) {
      // 3개의 JSON 파일을 동시에 요청
      Promise.all([
        axios.get(`/data/${id}_keyword_othersector.json`), // keyword_othersector 파일
        axios.get(`/data/${id}_keyword_samesector.json`), // keyword_samesector 파일
        axios.get(`/data/${id}_company.json`), // company 파일
      ])
        .then(
          ([
            keywordOtherSectorResponse,
            keywordSameSectorResponse,
            companyResponse,
          ]) => {
            // 각각의 응답을 적절한 state에 설정
            setOtherSectorKeyword(keywordOtherSectorResponse.data);
            setSameSectorKeyword(keywordSameSectorResponse.data);
            setCompanyData(companyResponse.data);
          }
        )
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <div className={styles.valueChainsection}>
      <div className={styles.valueChainVisual}>
        {/* company list section */}

        <div className={styles.companyList}>
          {companyData && companyData[selectedNodeId] && (
            <ul className={styles.keywordList}>
              {companyData[selectedNodeId].map((keyword, kIndex) => (
                <li key={kIndex} className={styles.keywordItem}>
                  {keyword}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other Sector data section */}
        <div className={styles.valueChain}>
          {OtherSectorKeyword && OtherSectorKeyword[selectedNodeId] && (
            <ul className={styles.keywordList}>
              {OtherSectorKeyword[selectedNodeId].map((keyword, kIndex) => (
                <li key={kIndex} className={styles.keywordItem}>
                  {keyword}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Title and other sections */}
        <div className={styles.titleBox}>
          <div className={styles.keywords}>Same Sector</div>
        </div>

        <div className={styles.valueChain2}>
          {/* Same Sector data section */}
          {SameSectorKeyword && SameSectorKeyword[selectedNodeId] && (
            <ul className={styles.keywordList}>
              {SameSectorKeyword[selectedNodeId].map((keyword, kIndex) => (
                <li key={kIndex} className={styles.keywordItem}>
                  {keyword}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ValueChain;
